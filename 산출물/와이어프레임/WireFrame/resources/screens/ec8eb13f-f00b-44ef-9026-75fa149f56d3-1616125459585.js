jQuery("#simulation")
  .on("click", ".s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 .click", function(event, data) {
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
                    "target": "screens/09e08aab-e480-4d58-b33d-fbcfd7047fb0"
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_1" ]
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
    } else if(jFirer.is("#s-Image_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_30 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_28 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_29 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_30 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_29 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_30 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_48 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_46 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_47 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_47")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_48 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_47 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_48")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_48 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_49")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_51 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_49 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_50 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_50")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_51 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_50 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_51")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_51 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_33 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_31 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_32 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_33 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_32 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_33 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_52")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_54 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_52 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_53 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_53")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_54 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_53 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_54")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_54 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_55")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_57 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_55 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_56 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_56")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_57 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_56 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_57")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_57 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_36 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_34 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_35 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_36 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_35 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_36 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a7aec9a6-b5cc-4979-8c1e-fffcbd18c663"
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
  .on("click", ".s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
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
                      "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Rectangle_7": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Rectangle_7 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Group_1" ]
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
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
                      "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Rectangle_8": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Rectangle_8 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
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
    } else if(jFirer.is("#s-Hotspot_3")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
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
                      "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Rectangle_9": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Rectangle_9 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
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
    } else if(jFirer.is("#s-Hotspot_4")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
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
                      "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Rectangle_10": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Rectangle_10 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
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
    } else if(jFirer.is("#s-Hotspot_5")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
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
                      "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Rectangle_11": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Rectangle_11 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
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
    }
  })
  .on("mouseenter dragenter", ".s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Image_28") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_30 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_28 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_29 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_29") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_30 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_29 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_30") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_30 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_46") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_48 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_46 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_47 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_47") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_48 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_47 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_48") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_48 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_49") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_51 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_49 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_50 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_50") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_51 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_50 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_51") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_51 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_31") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_33 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_31 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_32 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_32") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_33 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_32 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_33") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_33 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_52") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_54 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_52 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_53 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_53") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_54 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_53 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_54") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_54 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_55") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_57 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_55 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_56 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_56") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_57 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_56 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_57") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_57 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_34") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_36 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_34 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_35 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_35") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_36 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
                      }
                    }
                  },{
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_35 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
    } else if(jFirer.is("#s-Image_36") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 #s-Image_36 svg": {
                      "attributes": {
                        "overlay": "#E2202C"
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
  .on("mouseleave dragleave", ".s-ec8eb13f-f00b-44ef-9026-75fa149f56d3 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Image_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_29")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_30")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_46")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_47")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_48")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_49")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_50")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_51")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_31")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_32")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_33")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_52")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_53")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_54")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_55")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_56")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_57")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_34")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_35")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_36")) {
      jEvent.undoCases(jFirer);
    }
  });