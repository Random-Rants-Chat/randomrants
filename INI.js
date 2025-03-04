(function () {
  function isNodeJS () { //Allow for module.exports to be used if is being required with Node.js
    try{
      if (module) {
        return true;
      } else {
        return false;
      }
    }catch(e){
      return false;
    }
  }
  var _isnodejs = isNodeJS();
  
  if (!_isnodejs) {
    var module = { exports: null }; //Exports is the only value that is required.
  }
    
  function removeInvisibleCharsFromString(oldString) {
    /*var newString = oldString;
    var invisibleChars = ["\n", "\t", " "];
    var i = 0;

    while (invisibleChars.indexOf(newString[0]) > -1) {
      newString = newString.slice(1, newString.length);
      i += 1;
    }

    var i = oldString.length - 1;

    while (invisibleChars.indexOf(newString[newString.length - 1]) > -1) {
      newString = newString.slice(0, newString.length - 1);
      i += 1;
    }

    return newString;*/
    return oldString.trim(); //the same as above, but smaller code length.
  }

  function convertStringToProperValue(str) {
    if (!isNaN(Number(str))) {
      return Number(str);
    } else {
      if (str.toLowerCase() == "false") {
        return false;
      } else {
        if (str.toLowerCase() == "true") {
          return false;
        } else {
          if (str.toLowerCase() == "nan") {
            return NaN;
          } else {
            return str;
          }
        }
      }
    }
  }

  function from(inidata, providedOps) {
    if (typeof inidata !== "string") {
      throw new Error("Provided INI string value is not a string.");
      return;
    }

    var ops = {
      convertValues: true, //Convert values of variables to numbers if they are an type of number.
      ignoreComments: false, //Don't include comments in parsed if true.
      ignoreNewLines: true, //Dont include new line type in parsed array if true.
      throwErrors: true, //Throw errors rather then just returning them if true.
    };

    if (providedOps) {
      for (var key of Object.keys(providedOps)) {
        ops[key] = providedOps[key];
      }
    }

    try {
      var inistuff = inidata.replaceAll("\r", "\n");
    } catch (e) {
      var inistuff = inidata;
    }

    var iniStuffArray = inistuff.split("\n");

    var parts = [];

    var index = 0;
    var tmp2 = "";

    function removeComments(str) {
      var splitComment = str.split(";");
      if (!ops.ignoreComments) {
        if (splitComment.length > -1) {
          var comment = splitComment.slice(1,splitComment.length).join(";");
          parts.push({
            type:"comment",
            comment:comment
          });
        }
      }
      return splitComment[0];
    }

    while (index < iniStuffArray.length) {
      var inist = removeComments(iniStuffArray[index]);

      if (removeInvisibleCharsFromString(inist).startsWith("[")) {
        var i = 0;
        while (i < inist.length) {
          var char = inist[i];

          if (char == "[") {
            var label = "";
            i += 1;
            while (char !== "]" && i < inist.length) {
              if (!(i < inist.length)) {
                var error = new Error(
                  `Unable to parse INI (Line ${index + 1} Character ${
                    i + 1
                  }): could not find ending character.`
                );
                if (ops.throwErrors) {
                  throw error;
                }
                return error;
              }
              var char = inist[i];
              if (char !== "]") {
                label += char;
              }
              i += 1;
            }
            parts.push({
              type: "section",
              label: removeInvisibleCharsFromString(label),
            });
          }

          i += 1;
        }
      } else {
        if (inist.indexOf("=") > -1) {
          var i = 0;
          var equalSigns = 0;

          while (i < inist) {
            if (inist[i] == "=") {
              equalSigns += 1;
            }
            i += 1;
          }

          if (equalSigns > 1) {
            var error = new Error(
              `Unable to parse INI (Line ${
                index + 1
              } Character 1): multiple characters of "=" detected.`
            );
            if (ops.throwErrors) {
              throw error;
            }
            return error;
          }

          var things = inist.split("=");
          var name = removeInvisibleCharsFromString(things[0]);
          var value = removeInvisibleCharsFromString(things[1]);
          if (ops.convertValues) {
            value = convertStringToProperValue(value);
          }
          parts.push({
            type: "variable",
            unparsedName:things[0],
            unparsedValue:things[1],
            name: name,
            value: value,
          });
        } else {
          if (iniStuffArray[index] == "\n") {
            if (!ops.ignoreNewLines) {
              parts.push({
                type: "newline",
              });
            }
          }
        }
      }

      index += 1;
    }

    return parts;
  }

  function to(parsed, slightlyPrettier) {
    if (typeof parsed !== "object") {
      throw new Error("Provided parsed INI is not array.");
      return;
    }
    var output = "";
    var sect = null;
    for (var obj of parsed) {
      if (obj.type == "comment") {
        output += ";";
        output += obj.comment;
        output += "\n";
      }
      if (obj.type == "section") {
        if (slightlyPrettier && sect) {
          output += "\n";
        }
        sect = obj.label;
        output += "[";
        output += obj.label;
        output += "]";
        output += "\n";
      }
      if (obj.type == "variable") {
        output += obj.name;
        output += "=";
        output += obj.value;
        output += "\n";
      }
      if (obj.type == "newline") {
        output += "\n";
      }
    }
    
    if (output.endsWith("\n")) {
      output = output.slice(0,output.length-1);
    }

    return output;
  }

  function readValue(parsed, name) {
    var sect = "";
    for (var obj of parsed) {
      if (obj.type == "section") {
        sect = obj.label;
      }

      if (obj.type == "variable") {
        if (obj.name == name) {
          return obj.value;
        }
      }
    }
  }

  function readValueFromSection(parsed, name, section) {
    var sect = "";
    for (var obj of parsed) {
      if (obj.type == "section") {
        sect = obj.label;
      }

      if (obj.type == "variable") {
        if (sect == section && obj.name == name) {
          return obj.value;
        }
      }
    }
  }

  function setValue(parsed, name, value) {
    var sect = "";
    for (var obj of parsed) {
      if (obj.type == "section") {
        sect = obj.label;
      }

      if (obj.type == "variable") {
        if (obj.name == name) {
          obj.value = value;
          return;
        }
      }
    }
  }

  function setValueFromSection(parsed, name, section, value) {
    var sect = "";
    for (var obj of parsed) {
      if (obj.type == "section") {
        sect = obj.label;
      }

      if (obj.type == "variable") {
        if (sect == section && obj.name == name) {
          obj.value = value;
          return;
        }
      }
    }
  }

  function getValuesFromName(parsed, name) {
    var values = [];
    var sect = "";
    for (var obj of parsed) {
      if (obj.type == "section") {
        sect = obj.label;
      }

      if (obj.type == "variable") {
        if (obj.name == name) {
          values.push(obj);
        }
      }
    }

    return values;
  }

  function getValuesFromSection(parsed, section) {
    var values = [];
    var sect = "";
    for (var obj of parsed) {
      if (obj.type == "section") {
        sect = obj.label;
      }

      if (obj.type == "variable") {
        if (sect == section) {
          values.push(obj);
        }
      }
    }

    return values;
  }

  function createSection(name) {
    return {
      type: "section",
      label: name,
    };
  }

  function createVariable(name, value) {
    return {
      type: "variable",
      name: name,
      value: value,
    };
  }

  function createComment(comment) {
    return {
      type: "comment",
      comment: " " + comment,
    };
  }

  function toBranchesJSON(parsed) {
    var sect = null;
    var output = {};
    for (var part of parsed) {
      if (part.type == "section") {
        sect = part.label;
        output[sect] = {};
      }

      if (part.type == "variable") {
        if (sect) {
          output[sect][part.name] = part.value;
        } else {
          output[part.name] = part.value;
        }
      }
    }
    return output;
  }
  function fromBranchesJSON(branchesJSON) {
    var array = [];
    for (var name of Object.keys(branchesJSON)) {
      var value = branchesJSON[name];
      if (typeof value == "object") {
        array.push(createSection(name));
        for (var name2 of Object.keys(value)) {
          var value2 = value[name2];
          array.push(createVariable(name2, value2));
        }
      } else {
        if (typeof value !== "undefined") {
          array.push(createVariable(name, value));
        }
      }
    }
    return array;
  }
  
  class INIFile {
    constructor (text) {
      if (typeof text == "string") {
        //Read from INI text.
        this._iniObject = toBranchesJSON(from(text));
      } else {
        //Don't read from text, start from scratch.
        this._iniObject = {};
      }
    }
    
    getValue (name,section) {
      var sect = this._iniObject[section];
      if (typeof sect == "object") {
        if (typeof sect[name] !== "undefined") {
          return sect[name];
        }
      }
      return null;
    }
    
    valueExists (name,section) {
      var sect = this._iniObject[section];
      if (typeof sect == "object") {
        if (typeof sect[name] !== "undefined") {
          return true;
        }
      }
      return false;
    }
    
    setValue (name,section,value) {
      //This also returns true or false if the value has been stored
      if (typeof sect == "object" || typeof sect == "undefined") {
        return false;
      }
      var sect = this._iniObject[section];
      if (typeof sect == "object") {
        sect[name] = value;
        return true;
      }
      return false;
    }
    
    createSection (name) {
      this._iniObject[name] = {};
    }
    
    deleteSection (name) {
      this._iniObject[name] = undefined;
    }
    
    listSectionValues (section) {
      if (typeof this._iniObject[section] == "object") {
        return Object.keys(this._iniObject[section]);
      } else {
        return [];
      }
    }
    
    stringify () {
      return to(fromBranchesJSON(this._iniObject));
    }
  }

  module.exports = {
    //Import and export the INI file.
    from: from,
    to: to,
    //Read INI data.
    readValue: readValue,
    readValueFromSection: readValueFromSection,
    getValuesFromName: getValuesFromName,
    getValuesFromSection: getValuesFromSection,
    //Write INI data.
    setValue: readValue,
    setValueFromSection: readValueFromSection,
    //These are for adding things to the INI file.
    createSection: createSection,
    createVariable: createVariable,
    createComment: createComment,
    //Get INI as a JSON object.
    toBranchesJSON: toBranchesJSON,
    fromBranchesJSON: fromBranchesJSON,
    //Basically does the same thing as above, but as a constructor. (Easier to script for some people)
    INIFile: INIFile
  };
  
  if (!_isnodejs) {
    window.INI = module.exports; //No Node.js, so just globalize it.
  }
})();