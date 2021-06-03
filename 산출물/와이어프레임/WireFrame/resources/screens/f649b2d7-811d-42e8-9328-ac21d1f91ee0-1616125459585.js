jQuery("#simulation")
  .on("click", ".s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8f1aff96-b24d-477c-8ad8-eea95bbbe756"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c96765dd-336f-438b-9db8-a54b526cb95c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_cell_37") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 #s-Text_cell_37": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 #s-Text_cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_38") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 #s-Text_cell_38": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 #s-Text_cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_39") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 #s-Text_cell_39": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 #s-Text_cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_40") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 #s-Text_cell_40": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 #s-Text_cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_41") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 #s-Text_cell_41": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 #s-Text_cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_42") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 #s-Text_cell_42": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 #s-Text_cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-f649b2d7-811d-42e8-9328-ac21d1f91ee0 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_cell_37")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_38")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_39")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_40")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_41")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_42")) {
      jEvent.undoCases(jFirer);
    }
  });