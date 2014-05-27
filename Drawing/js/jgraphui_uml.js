// 클래스 정보 수정 이벤트
var Class = new ClassStorage();
(function ($) {
    $.fn._t = function (nodeId, dgrm) {
        var self = $(this);
        self.value = self.text();
		//$("#classlist > div").hide();

		self.bind('click', function()
		{
			//alert(nodeId);
			activateClass(nodeId);
		});

    }
})(jQuery);

function dtc(node, direction, port, canvasobj, line) {
    direction = node + "_" + direction;
    var startx;
    var starty;
    var endx = port.position().left + $("#" + node).position().left + $(canvasobj.getCanvas).scrollLeft();
    var endy = port.position().top + $("#" + node).position().top + $(canvasobj.getCanvas).scrollTop();
    var nodex = $("#" + node).position().left + $(canvasobj.getCanvas).scrollLeft();
    var nodey = $("#" + node).position().top + $(canvasobj.getCanvas).scrollTop();
    var nw = $("#" + node).width();
    var nh = $("#" + node).height();
    var hnw = Math.floor(nw / 2);
    var hnh = Math.floor(nh / 2);
    var zone;
    var portNumber;
    if (direction.match(/_n$/)) {
        startx = nodex + hnw;
        starty = nodey;
        portNumber = 1
    } else if (direction.match(/_e$/)) {
        startx = nodex + nw;
        starty = nodey + hnh;
        portNumber = 2
    } else if (direction.match(/_s$/)) {
        startx = nodex + hnw;
        starty = nodey + nh;
        portNumber = 3
    } else if (direction.match(/_w$/)) {
        startx = nodex;
        starty = nodey + hnh;
        portNumber = 4
    }
    if (endx <= (nodex + hnw)) {
        if (endy <= (nodey + hnh)) {
            if (endy <= nodey) {
                if (endy >= nodey - 10 && endx > nodex) {
                    zone = "Z1A10";
                    line.clear()
                } else {
                    if (endx <= nodex - 10) {
                        zone = "Z8";
                        switch (portNumber) {
                            case 1:
                                zone = "N ---> Z8";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey, (nodex) + hnw, endy);
                                line.drawLine((nodex) + hnw, endy, endx, endy);
                                line.paint();
                                break;
                            case 2:
                                zone = "E ---> Z8";
                                line.clear();
                                line.drawLine((nodex) + nw, nodey + hnh, (nodex) + nw + 10, nodey + hnh);
                                line.drawLine((nodex) + nw + 10, nodey + hnh, (nodex) + nw + 10, endy);
                                line.drawLine((nodex) + nw + 10, endy, endx, endy);
                                line.paint();
                                break;
                            case 3:
                                zone = "S ---> Z8";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey + nh, (nodex) + hnw, nodey + nh + 10);
                                line.drawLine((nodex) + hnw, nodey + nh + 10, endx, nodey + nh + 10);
                                line.drawLine(endx, nodey + nh + 10, endx, endy);
                                line.paint();
                                break;
                            case 4:
                                zone = "W ---> Z8";
                                line.clear();
                                line.drawLine(nodex, nodey + hnh, endx, nodey + hnh);
                                line.drawLine(endx, nodey + hnh, endx, endy);
                                line.paint();
                                break
                        }
                    } else {
                        zone = "Z1A";
                        switch (portNumber) {
                            case 1:
                                zone = "N ---> Z1A";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey, (nodex) + hnw, endy);
                                line.drawLine((nodex) + hnw, endy, endx, endy);
                                line.paint();
                                break;
                            case 2:
                                zone = "E ---> Z1A";
                                line.clear();
                                line.drawLine((nodex) + nw, nodey + hnh, (nodex) + nw + 10, nodey + hnh);
                                line.drawLine((nodex) + nw + 10, nodey + hnh, (nodex) + nw + 10, endy);
                                line.drawLine((nodex) + nw + 10, endy, endx, endy);
                                line.paint();
                                break;
                            case 3:
                                zone = "S ---> Z1A";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey + nh, (nodex) + hnw, nodey + nh + 10);
                                line.drawLine((nodex) + hnw, nodey + nh + 10, nodex - 10, nodey + nh + 10);
                                line.drawLine(nodex - 10, nodey + nh + 10, nodex - 10, endy);
                                line.drawLine(nodex - 10, endy, endx, endy);
                                line.paint();
                                break;
                            case 4:
                                zone = "W ---> Z1A";
                                line.clear();
                                line.drawLine(nodex, nodey + hnh, nodex - 10, nodey + hnh);
                                line.drawLine(nodex - 10, nodey + hnh, nodex - 10, endy);
                                line.drawLine(nodex - 10, endy, endx, endy);
                                line.paint();
                                break
                        }
                    }
                }
            } else {
                if (endx <= nodex - 10) {
                    zone = "Z7B";
                    switch (portNumber) {
                        case 1:
                            zone = "N ---> Z7B";
                            line.clear();
                            line.drawLine((nodex) + hnw, nodey, (nodex) + hnw, nodey - 10);
                            line.drawLine((nodex) + hnw, nodey - 10, endx, nodey - 10);
                            line.drawLine(endx, nodey - 10, endx, endy);
                            line.paint();
                            break;
                        case 2:
                            zone = "E ---> Z7B";
                            line.clear();
                            line.drawLine((nodex) + nw, nodey + hnh, (nodex) + nw + 10, nodey + hnh);
                            line.drawLine((nodex) + nw + 10, nodey + hnh, (nodex) + nw + 10, nodey - 10);
                            line.drawLine((nodex) + nw + 10, nodey - 10, endx, nodey - 10);
                            line.drawLine(endx, nodey - 10, endx, endy);
                            line.paint();
                            break;
                        case 3:
                            zone = "S ---> Z7B";
                            line.clear();
                            line.drawLine((nodex) + hnw, nodey + nh, (nodex) + hnw, nodey + nh + 10);
                            line.drawLine((nodex) + hnw, nodey + nh + 10, endx, nodey + nh + 10);
                            line.drawLine(endx, nodey + nh + 10, endx, endy);
                            line.paint();
                            break;
                        case 4:
                            zone = "W ---> Z7B";
                            line.clear();
                            line.drawLine(nodex, nodey + hnh, endx, nodey + hnh);
                            line.drawLine(endx, nodey + hnh, endx, endy);
                            line.paint();
                            break
                    }
                } else {
                    zone = "Z7B10";
                    line.clear()
                }
            }
        } else {
            if (endy >= nodey + nh) {
                if ((endy <= nodey + nh + 10) && (endx >= nodex)) {
                    zone = "Z5B10";
                    line.clear()
                } else {
                    if (endx <= nodex - 10) {
                        zone = "Z6";
                        switch (portNumber) {
                            case 1:
                                zone = "N ---> Z6";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey, (nodex) + hnw, nodey - 10);
                                line.drawLine((nodex) + hnw, nodey - 10, endx, nodey - 10);
                                line.drawLine(endx, nodey - 10, endx, endy - 10);
                                line.paint();
                                break;
                            case 2:
                                zone = "E ---> Z6";
                                line.clear();
                                line.drawLine((nodex) + nw, nodey + hnh, (nodex) + nw + 10, nodey + hnh);
                                line.drawLine((nodex) + nw + 10, nodey + hnh, (nodex) + nw + 10, endy);
                                line.drawLine((nodex) + nw + 10, endy, endx, endy);
                                line.paint();
                                break;
                            case 3:
                                zone = "S ---> Z6";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey + nh, (nodex) + hnw, endy);
                                line.drawLine((nodex) + hnw, endy, endx, endy);
                                line.paint();
                                break;
                            case 4:
                                zone = "W ---> Z6";
                                line.clear();
                                line.drawLine(nodex, nodey + hnh, endx, nodey + hnh);
                                line.drawLine(endx, nodey + hnh, endx, endy);
                                line.paint();
                                break
                        }
                    } else {
                        zone = "Z5B";
                        switch (portNumber) {
                            case 1:
                                zone = "N ---> Z5B";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey, (nodex) + hnw, nodey - 10);
                                line.drawLine((nodex) + hnw, nodey - 10, nodex - 20, nodey - 10);
                                line.drawLine(nodex - 20, nodey - 10, nodex - 20, endy);
                                line.drawLine(nodex - 20, endy, endx, endy);
                                line.paint();
                                break;
                            case 2:
                                zone = "E ---> Z5B";
                                line.clear();
                                line.drawLine((nodex) + nw, nodey + hnh, (nodex) + nw + 10, nodey + hnh);
                                line.drawLine((nodex) + nw + 10, nodey + hnh, (nodex) + nw + 10, endy);
                                line.drawLine((nodex) + nw + 10, endy, endx, endy);
                                line.paint();
                                break;
                            case 3:
                                zone = "S ---> Z5B";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey + nh, (nodex) + hnw, endy);
                                line.drawLine((nodex) + hnw, endy, endx, endy);
                                line.paint();
                                break;
                            case 4:
                                zone = "W ---> Z5B";
                                line.clear();
                                line.drawLine(nodex, nodey + hnh, nodex - 10, nodey + hnh);
                                line.drawLine(nodex - 10, nodey + hnh, nodex - 10, endy);
                                line.drawLine(nodex - 10, endy, endx, endy);
                                line.paint();
                                break
                        }
                    }
                }
            } else {
                if (endx <= nodex - 10) {
                    switch (portNumber) {
                        case 1:
                            zone = "N ---> Z7A";
                            line.clear();
                            line.drawLine((nodex) + hnw, nodey, (nodex) + hnw, nodey - 10);
                            line.drawLine((nodex) + hnw, nodey - 10, endx, nodey - 10);
                            line.drawLine(endx, nodey - 10, endx, endy);
                            line.paint();
                            break;
                        case 2:
                            zone = "E ---> Z7A";
                            line.clear();
                            line.drawLine((nodex) + nw, nodey + hnh, (nodex) + nw + 10, nodey + hnh);
                            line.drawLine((nodex) + nw + 10, nodey + hnh, (nodex) + nw + 10, nodey + nh + 10);
                            line.drawLine((nodex) + nw + 10, nodey + nh + 10, endx, nodey + nh + 10);
                            line.drawLine(endx, nodey + nh + 10, endx, endy);
                            line.paint();
                            break;
                        case 3:
                            zone = "S ---> Z7A";
                            line.clear();
                            line.drawLine((nodex) + hnw, nodey + nh, (nodex) + hnw, nodey + nh + 10);
                            line.drawLine((nodex) + hnw, nodey + nh + 10, endx, nodey + nh + 10);
                            line.drawLine(endx, nodey + nh + 10, endx, endy);
                            line.paint();
                            break;
                        case 4:
                            zone = "W ---> Z7A";
                            line.clear();
                            line.drawLine(nodex, nodey + hnh, endx, nodey + hnh);
                            line.drawLine(endx, nodey + hnh, endx, endy);
                            line.paint();
                            break
                    }
                } else {
                    zone = "Z7A10";
                    line.clear()
                }
            }
        }
    } else {
        if (endy <= (nodey + hnh)) {
            if (endy <= nodey) {
                if (endy >= nodey - 10 && endx <= nw) {
                    zone = "Z1B10";
                    line.clear()
                } else {
                    if (endx <= nodex + nw) {
                        zone = "Z1B";
                        switch (portNumber) {
                            case 1:
                                zone = "N ---> Z1B";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey, (nodex) + hnw, endy);
                                line.drawLine((nodex) + hnw, endy, endx, endy);
                                line.paint();
                                break;
                            case 2:
                                zone = "E ---> Z1B";
                                line.clear();
                                line.drawLine((nodex) + nw, nodey + hnh, (nodex) + nw + 10, nodey + hnh);
                                line.drawLine((nodex) + nw + 10, nodey + hnh, (nodex) + nw + 10, endy);
                                line.drawLine((nodex) + nw + 10, endy, endx, endy);
                                line.paint();
                                break;
                            case 3:
                                zone = "S ---> Z1B";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey + nh, (nodex) + hnw, nodey + nh + 10);
                                line.drawLine((nodex) + hnw, nodey + nh + 10, nodex + nw + 10, nodey + nh + 10);
                                line.drawLine(nodex + nw + 10, nodey + nh + 10, nodex + nw + 10, endy);
                                line.drawLine(nodex + nw + 10, endy, endx, endy);
                                line.paint();
                                break;
                            case 4:
                                zone = "W ---> Z1B";
                                line.clear();
                                line.drawLine(nodex, nodey + hnh, nodex - 10, nodey + hnh);
                                line.drawLine(nodex - 10, nodey + hnh, nodex - 10, endy);
                                line.drawLine(nodex - 10, endy, endx, endy);
                                line.paint();
                                break
                        }
                    } else {
                        zone = "Z2";
                        switch (portNumber) {
                            case 1:
                                zone = "N ---> Z2";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey, (nodex) + hnw, endy);
                                line.drawLine((nodex) + hnw, endy, endx, endy);
                                line.paint();
                                break;
                            case 2:
                                zone = "E ---> Z2";
                                line.clear();
                                line.drawLine((nodex) + nw, nodey + hnh, endx, nodey + hnh);
                                line.drawLine(endx, nodey + hnh, endx, endy);
                                line.paint();
                                break;
                            case 3:
                                zone = "S ---> Z2";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey + nh, (nodex) + hnw, nodey + nh + 10);
                                line.drawLine((nodex) + hnw, nodey + nh + 10, endx, nodey + nh + 10);
                                line.drawLine(endx, nodey + nh + 10, endx, endy);
                                line.paint();
                                break;
                            case 4:
                                zone = "W ---> Z2";
                                line.clear();
                                line.drawLine(nodex, nodey + hnh, nodex - 10, nodey + hnh);
                                line.drawLine(nodex - 10, nodey + hnh, nodex - 10, endy);
                                line.drawLine(nodex - 10, endy, endx, endy);
                                line.paint();
                                break
                        }
                    }
                }
            } else {
                if (endx <= nodex + nw + 10) {
                    zone = "Z3A10";
                    line.clear()
                } else {
                    zone = "Z3A";
                    switch (portNumber) {
                        case 1:
                            zone = "N ---> Z3A";
                            line.clear();
                            line.drawLine((nodex) + hnw, nodey, (nodex) + hnw, nodey - 10);
                            line.drawLine((nodex) + hnw, nodey - 10, endx, nodey - 10);
                            line.drawLine(endx, nodey - 10, endx, endy);
                            line.paint();
                            break;
                        case 2:
                            zone = "E ---> Z3A";
                            line.clear();
                            line.drawLine((nodex) + nw, nodey + hnh, endx, nodey + hnh);
                            line.drawLine(endx, nodey + hnh, endx, endy);
                            line.paint();
                            break;
                        case 3:
                            zone = "S ---> Z3A";
                            line.clear();
                            line.drawLine((nodex) + hnw, nodey + nh, (nodex) + hnw, nodey + nh + 10);
                            line.drawLine((nodex) + hnw, nodey + nh + 10, endx, nodey + nh + 10);
                            line.drawLine(endx, nodey + nh + 10, endx, endy);
                            line.paint();
                            break;
                        case 4:
                            zone = "W ---> Z3A";
                            line.clear();
                            line.drawLine(nodex, nodey + hnh, nodex - 10, nodey + hnh);
                            line.drawLine(nodex - 10, nodey + hnh, nodex - 10, nodey - 10);
                            line.drawLine(nodex - 10, nodey - 10, endx, nodey - 10);
                            line.drawLine(endx, nodey - 10, endx, endy);
                            line.paint();
                            break
                    }
                }
            }
        } else {
            if (endy >= nodey + nh) {
                if ((endy <= nodey + nh + 10) && (endx <= nodex + nw)) {
                    zone = "Z5A10";
                    line.clear()
                } else {
                    if (endx <= nodex + nw) {
                        zone = "Z5A";
                        switch (portNumber) {
                            case 1:
                                zone = "N ---> Z5A";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey, (nodex) + hnw, nodey - 10);
                                line.drawLine((nodex) + hnw, nodey - 10, nodex + nw + 10, nodey - 10);
                                line.drawLine(nodex + nw + 10, nodey - 10, nodex + nw + 10, endy);
                                line.drawLine(nodex + nw + 10, endy, endx, endy);
                                line.paint();
                                break;
                            case 2:
                                zone = "E ---> Z5A";
                                line.clear();
                                line.drawLine((nodex) + nw, nodey + hnh, (nodex) + nw + 10, nodey + hnh);
                                line.drawLine((nodex) + nw + 10, nodey + hnh, (nodex) + nw + 10, endy);
                                line.drawLine((nodex) + nw + 10, endy, endx, endy);
                                line.paint();
                                break;
                            case 3:
                                zone = "S ---> Z5A";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey + nh, (nodex) + hnw, endy);
                                line.drawLine((nodex) + hnw, endy, endx, endy);
                                line.paint();
                                break;
                            case 4:
                                zone = "W ---> Z5A";
                                line.clear();
                                line.drawLine(nodex, nodey + hnh, nodex - 10, nodey + hnh);
                                line.drawLine(nodex - 10, nodey + hnh, nodex - 10, endy);
                                line.drawLine(nodex - 10, endy, endx, endy);
                                line.paint();
                                break
                        }
                    } else {
                        zone = "Z4";
                        switch (portNumber) {
                            case 1:
                                zone = "N ---> Z4";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey, (nodex) + hnw, nodey - 10);
                                line.drawLine((nodex) + hnw, nodey - 10, endx, nodey - 10);
                                line.drawLine(endx, nodey - 10, endx, endy);
                                line.paint();
                                break;
                            case 2:
                                zone = "E ---> Z4";
                                line.clear();
                                line.drawLine((nodex) + nw, nodey + hnh, endx, nodey + hnh);
                                line.drawLine(endx, nodey + hnh, endx, endy);
                                line.paint();
                                break;
                            case 3:
                                zone = "S ---> Z4";
                                line.clear();
                                line.drawLine((nodex) + hnw, nodey + nh, (nodex) + hnw, endy);
                                line.drawLine((nodex) + hnw, endy, endx, endy);
                                line.paint();
                                break;
                            case 4:
                                zone = "W ---> Z4";
                                line.clear();
                                line.drawLine(nodex, nodey + hnh, nodex - 10, nodey + hnh);
                                line.drawLine(nodex - 10, nodey + hnh, nodex - 10, endy);
                                line.drawLine(nodex - 10, endy, endx, endy);
                                line.paint();
                                break
                        }
                    }
                }
            } else {
                if (endx <= nodex + nw + 10) {
                    zone = "Z3B10";
                    line.clear()
                } else {
                    zone = "Z3B";
                    switch (portNumber) {
                        case 1:
                            zone = "N ---> Z3B";
                            line.clear();
                            line.drawLine((nodex) + hnw, nodey, (nodex) + hnw, nodey - 10);
                            line.drawLine((nodex) + hnw, nodey - 10, endx, nodey - 10);
                            line.drawLine(endx, nodey - 10, endx, endy);
                            line.paint();
                            break;
                        case 2:
                            zone = "E ---> Z3B";
                            line.clear();
                            line.drawLine((nodex) + nw, nodey + hnh, endx, nodey + hnh);
                            line.drawLine(endx, nodey + hnh, endx, endy);
                            line.paint();
                            break;
                        case 3:
                            zone = "S ---> Z3B";
                            line.clear();
                            line.drawLine((nodex) + hnw, nodey + nh, (nodex) + hnw, nodey + nh + 10);
                            line.drawLine((nodex) + hnw, nodey + nh + 10, endx, nodey + nh + 10);
                            line.drawLine(endx, nodey + nh + 10, endx, endy);
                            line.paint();
                            break;
                        case 4:
                            zone = "W ---> Z3B";
                            line.clear();
                            line.drawLine(nodex, nodey + hnh, nodex - 10, nodey + hnh);
                            line.drawLine(nodex - 10, nodey + hnh, nodex - 10, nodey + nh + 10);
                            line.drawLine(nodex - 10, nodey + nh + 10, endx, nodey + nh + 10);
                            line.drawLine(endx, nodey + nh + 10, endx, endy);
                            line.paint();
                            break
                    }
                }
            }
        }
    }
};
Toolbar = function (dgrm, params) {
    var toolbar = this;
    if (!params) {
        params = {
            'empty': 'empty'
        }
    }
    toolbar.xPosition = (params["xPosition"]) ? params["xPosition"] : 20;
    toolbar.yPosition = (params["yPosition"]) ? params["yPosition"] : 30;
    toolbar.width = (params["width"]) ? params["width"] : 1000;
    toolbar.add_button = (params["add_button"] == false) ? params["add_button"] : true;
    toolbar.save_button = (params["save_button"] == false) ? params["save_button"] : true;
    toolbar.delete_button = (params["delete_button"] == false) ? params["delete_button"] : true;
    toolbar.background_color_button = (params["background_color_button"] == false) ? params["background_color_button"] : true;
    toolbar.border_color_button = (params["border_color_button"] == false) ? params["border_color_button"] : true;
    toolbar.font_color_button = (params["font_color_button"] == false) ? params["font_color_button"] : true;
    toolbar.font_size_button = (params["font_size_button"] == false) ? params["font_size_button"] : true;
    toolbar.font_family_button = (params["font_family_button"] == false) ? params["font_family_button"] : true;
    toolbar.border_width_button = (params["border_width_button"] == false) ? params["border_width_button"] : true;
    toolbar.defaultNodePalette = [{
        'order': '1',
        'color': '000000',
        'icon': dgrm.imagesPath + 'node.gif',
        'nodeType': 'NODE',
        'nodeContent': 'Node Content',
        'width': '100',
        'height': '100',
        'bgColor': '#FFFFFF',
        'borderColor': '#AAAAAA',
        'borderWidth': '1',
        'fontColor': '#000000',
        'fontSize': '',
        'fontType': '',
        'minHeight': 40,
        'maxHeight': 200,
        'minWidth': 40,
        'maxWidth': 200,
        'nPort': true,
        'ePort': true,
        'sPort': true,
        'wPort': true,
        'image': '',
        'draggable': true,
        'resizable': true,
        'editable': true,
        'selectable': true,
        'deletable': true,
        'nPortMakeConnection': true,
        'ePortMakeConnection': true,
        'sPortMakeConnection': true,
        'wPortMakeConnection': true,
        'nPortAcceptConnection': true,
        'ePortAcceptConnection': true,
        'sPortAcceptConnection': true,
        'wPortAcceptConnection': true
    }, {
        'order': '2',
        'color': '572342',
        'icon': dgrm.imagesPath + 'text2.gif',
        'nodeType': 'TEXT',
        'nodeContent': 'Node Content',
        'width': '100',
        'height': '40',
        'bgColor': '#FFFFFF',
        'borderColor': '#AAAAAA',
        'borderWidth': '1',
        'fontColor': '#000000',
        'fontSize': '',
        'fontType': '',
        'minHeight': 40,
        'maxHeight': 200,
        'minWidth': 40,
        'maxWidth': 200,
        'nPort': true,
        'ePort': true,
        'sPort': true,
        'wPort': true,
        'image': '',
        'draggable': true,
        'resizable': true,
        'editable': true,
        'selectable': true,
        'deletable': true,
        'nPortMakeConnection': true,
        'ePortMakeConnection': true,
        'sPortMakeConnection': true,
        'wPortMakeConnection': true,
        'nPortAcceptConnection': true,
        'ePortAcceptConnection': true,
        'sPortAcceptConnection': true,
        'wPortAcceptConnection': true
    }, {
        'order': '3',
        'color': '123456',
        'icon': dgrm.imagesPath + 'user.png',
        'nodeType': 'IMAGE',
        'nodeContent': '',
        'width': '50',
        'height': '50',
        'bgColor': '#FFFFFF',
        'borderColor': '#AAAAAA',
        'borderWidth': '1',
        'fontColor': '#000000',
        'fontSize': '',
        'fontType': '',
        'minHeight': 50,
        'maxHeight': 200,
        'minWidth': 50,
        'maxWidth': 200,
        'nPort': true,
        'ePort': true,
        'sPort': true,
        'wPort': true,
        'image': dgrm.imagesPath + 'user.png',
        'imageWidth': 40,
        'imageHeight': 40,
        'draggable': true,
        'resizable': true,
        'editable': true,
        'selectable': true,
        'deletable': true,
        'nPortMakeConnection': true,
        'ePortMakeConnection': true,
        'sPortMakeConnection': true,
        'wPortMakeConnection': true,
        'nPortAcceptConnection': true,
        'ePortAcceptConnection': true,
        'sPortAcceptConnection': true,
        'wPortAcceptConnection': true
    }, {
        'order': '4',
        'color': '876543',
        'icon': dgrm.imagesPath + 'computer.png',
        'nodeType': 'IMAGE',
        'nodeContent': 'Node Content',
        'width': '50',
        'height': '50',
        'bgColor': '#FFFFFF',
        'borderColor': '#AAAAAA',
        'borderWidth': '1',
        'fontColor': '#000000',
        'fontSize': '',
        'fontType': '',
        'minHeight': 50,
        'maxHeight': 200,
        'minWidth': 50,
        'maxWidth': 200,
        'nPort': true,
        'ePort': true,
        'sPort': true,
        'wPort': true,
        'image': dgrm.imagesPath + 'computer.png',
        'imageWidth': 40,
        'imageHeight': 40,
        'draggable': true,
        'resizable': true,
        'editable': true,
        'selectable': true,
        'deletable': true,
        'nPortMakeConnection': true,
        'ePortMakeConnection': true,
        'sPortMakeConnection': true,
        'wPortMakeConnection': true,
        'nPortAcceptConnection': true,
        'ePortAcceptConnection': true,
        'sPortAcceptConnection': true,
        'wPortAcceptConnection': true
    }, {
        'order': '5',
        'color': '0e2532',
        'icon': dgrm.imagesPath + 'circle.gif',
        'nodeType': 'IMAGE',
        'nodeContent': 'Node Content',
        'xPosition': 300,
        'yPosition': 200,
        'width': '100',
        'height': '100',
        'bgColor': '#FFFFFF',
        'borderColor': '#AAAAAA',
        'borderWidth': '1',
        'fontColor': '#000000',
        'fontSize': '',
        'fontType': '',
        'minHeight': 40,
        'maxHeight': 100,
        'minWidth': 40,
        'maxWidth': 100,
        'nPort': true,
        'ePort': true,
        'sPort': true,
        'wPort': true,
        'image': dgrm.imagesPath + 'circle.gif',
        'imageWidth': 40,
        'imageHeight': 40,
        'draggable': true,
        'resizable': true,
        'editable': true,
        'selectable': true,
        'deletable': true,
        'nPortMakeConnection': true,
        'ePortMakeConnection': true,
        'sPortMakeConnection': true,
        'wPortMakeConnection': true,
        'nPortAcceptConnection': true,
        'ePortAcceptConnection': true,
        'sPortAcceptConnection': true,
        'wPortAcceptConnection': true
    }, {
        'order': '6',
        'color': 'ff0000',
        'icon': dgrm.imagesPath + 'decision.gif',
        'nodeType': 'IMAGE',
        'nodeContent': 'Node Content',
        'xPosition': 300,
        'yPosition': 200,
        'width': '100',
        'height': '100',
        'bgColor': '#FFFFFF',
        'borderColor': '#AAAAAA',
        'borderWidth': '1',
        'fontColor': '#000000',
        'fontSize': '',
        'fontType': '',
        'minHeight': 40,
        'maxHeight': 100,
        'minWidth': 40,
        'maxWidth': 100,
        'nPort': true,
        'ePort': true,
        'sPort': true,
        'wPort': true,
        'image': dgrm.imagesPath + 'decision.gif',
        'imageWidth': 40,
        'imageHeight': 40,
        'draggable': true,
        'resizable': true,
        'editable': true,
        'selectable': true,
        'deletable': true,
        'nPortMakeConnection': true,
        'ePortMakeConnection': true,
        'sPortMakeConnection': true,
        'wPortMakeConnection': true,
        'nPortAcceptConnection': true,
        'ePortAcceptConnection': true,
        'sPortAcceptConnection': true,
        'wPortAcceptConnection': true
    }];
    toolbar.getNodeByOrder = function (order) {
        for (i = 0; i < toolbar.defaultNodePalette.length; i++) {
            if (toolbar.defaultNodePalette[i]['order'] == order) {
                return (toolbar.defaultNodePalette[i])
            }
        }
    };
    toolbarExists = false;
	/*
    if (toolbar.add_button || toolbar.save_button || toolbar.delete_button || toolbar.background_color_button || toolbar.border_color_button || toolbar.font_color_button || toolbar.font_size_button || toolbar.border_width_button || toolbar.font_family_button) {
        toolbarExists = true
    }*/
	// 클래스 삭제 명령
    $("#oops_uml").click(function () {
         // dgrm.toJSON();
		  location.href="./Tool_Canvas.htm?autoload=yes";
    })
	// 클래스 삭제 명령
    $("#oops_delclass").click(function () {
         dgrm.deleteSelectedNodes()
		 Class.deleteLocalStorage(currentClass, -1, -1); 
    })
	// JSON 포맷 생성
    $("#oops_save").click(function () {
          dgrm.toJSON(); //diagram 객체
		  //finalClassSave(); //diagram 데이터구조
		  $("#diagram_name").show();
		
    })
	// JSON 파싱
    $("#oops_load").click(function () {
		  dgrm.clearCanvas()
          dgrm.fromJSON()
    })
	// 다이어그램 클리어
    $("#oops_clear").click(function () {
		  dgrm.clearCanvas()
		  //seolhee
		  localStorage.clear();
		  initClassInfo();
		  $("#classlist").empty();
    })

    if (toolbarExists) {
        var bar = '<div id="toolbar_' + dgrm.canvasID + '" style="position: absolute;left:' + toolbar.xPosition + 'px; top:' + toolbar.yPosition + 'px; width:' + toolbar.width + 'px; height:30px;padding:2px;" class="ui-widget-header ui-corner-all">';

		if (toolbar.add_button) {
            bar += '<button id="add_button_' + dgrm.canvasId + '">Add Node</button>'
        }
        if (toolbar.delete_button) {
            bar += '<button id="delete_button_' + dgrm.canvasId + '">Delete</button>'
        }
        if (toolbar.save_button) {
            bar += '<button id="save_button_' + dgrm.canvasId + '">Save</button>'
        }
        if (toolbar.background_color_button) {
            bar += '<button id="bgcolor_button_' + dgrm.canvasId + '">Background Color</button>'
        }
        if (toolbar.border_color_button) {
            bar += '<button id="bcolor_button_' + dgrm.canvasId + '">Border Color</button>'
        }
        if (toolbar.font_color_button) {
            bar += '<button id="fcolor_button_' + dgrm.canvasId + '">Font Color</button>'
        }
        if (toolbar.font_size_button) {
            bar += '<button id="fsize_button_' + dgrm.canvasId + '">Font Size</button>'
        }
        if (toolbar.font_family_button) {
            bar += '<button id="ffamily_button_' + dgrm.canvasId + '">Font Family</button>'
        }
        if (toolbar.border_width_button) {
            bar += '<button id="bwidth_button_' + dgrm.canvasId + '">Border Width</button>'
        }
        bar += '</div>';
        $('body').append(bar);
        if (toolbar.add_button) {
            $("#add_button_" + dgrm.canvasId).button({
                icons: {
                    primary: "add_node"
                }
            }).simpleNodePalette(dgrm, toolbar.defaultNodePalette)
        }
        if (toolbar.delete_button) {
            $("#delete_button_" + dgrm.canvasId).button({
                icons: {
                    primary: "delete_node"
                }
            }).click(function () {
                dgrm.deleteSelectedNodes()
            })
        }

        if (toolbar.border_color_button) {
            $("#bgcolor_button_" + dgrm.canvasId).button({
                icons: {
                    primary: "background_color"
                }
            }).simpleColorPalette(dgrm, 'bgcolor')
        }
        if (toolbar.border_color_button) {
            $("#bcolor_button_" + dgrm.canvasId).button({
                icons: {
                    primary: "border_color"
                }
            }).simpleColorPalette(dgrm, 'bordercolor')
        }
        if (toolbar.font_color_button) {
            $("#fcolor_button_" + dgrm.canvasId).button({
                icons: {
                    primary: "font_color"
                }
            }).simpleColorPalette(dgrm, 'fontcolor')
        }
        if (toolbar.font_size_button) {
            $("#fsize_button_" + dgrm.canvasId).button({
                icons: {
                    primary: "font_size"
                }
            }).simpleFontSizePalette(dgrm)
        }
        if (toolbar.font_family_button) {
            $("#ffamily_button_" + dgrm.canvasId).button({
                icons: {
                    primary: "font_family"
                }
            }).simpleFontFamilyPalette(dgrm)
        }
        if (toolbar.border_width_button) {
            $("#bwidth_button_" + dgrm.canvasId).button({
                icons: {
                    primary: "border_width"
                }
            }).simpleBorderWidthPalette(dgrm)
        }
    }
};
(function ($) {
    $.fn.simpleNodePalette = function (dgrm, defaultNodes) {
        var self = $(this);
        var id = self.attr("id") + "_" + dgrm.canvasId;
        var container = '<div id="' + id + '" class="simple_node_palette"></div>';
        $("body").append(container);
        $("#" + id).hide();
        self.click(function () {
            var x = self.offset().left;
            var y = self.offset().top + self.height() + 8;
            $("#" + id).css('left', x);
            $("#" + id).css('top', y);
            $("#" + id).show()
        });
        hidePalette = function () {
            $(".simple_node_palette").hide()
        };
        checkMouse = function (event) {
            var selector = ".simple_node_palette";
            var selectorParent = $(event.target).parents(selector).length;
            if (event.target == $(selector)[0] || selectorParent > 0) {
                return
            }
            hidePalette()
        };
        $(document).bind("mousedown", checkMouse);
        $.each(defaultNodes, function (i) {
            swatch = $("<div id='" + this['order'] + "_" + dgrm.canvasId + "' class='node_palette_item'><img width=40px height=40px border=0 src='" + this['icon'] + "'/></div>");
            swatch.css("background", "#EEEEEE");
            swatch.draggable({
                helper: "clone",
                stop: function (event, ui) {
                    hidePalette()
                }
            });
            swatch.bind("mouseover", function (e) {
                //$(this).css("border", "1px solid #AAAAAA")
            });
            swatch.bind("mouseout", function (e) {
                $(this).css("border", "1px solid #EEEEEE")
            });
            swatch.appendTo("#" + id)
        })
    }
})(jQuery);
(function ($) {
    $.fn.simpleColorPalette = function (dgrm, color) {
        var self = $(this);
        defaultColors = ['000000', '585858', '6E6E6E', '848484', 'A4A4A4', 'BDBDBD', 'D8D8D8', 'E6E6E6', 'FFFFFF', '610B21', '8A0829', 'B40431', 'DF013A', 'FF0040', 'FE2E64', 'FA5882', 'F7819F', 'F5A9BC', '610B5E', '8A0886', 'B404AE', 'DF01D7', 'FF00FF', 'FE2EF7', 'FA58F4', 'F781F3', 'F5A9F2', '0B0B61', '08088A', '0404B4', '0101DF', '0000FF', '2E2EFE', '5858FA', '8181F7', 'A9A9F5', '0B3861', '084B8A', '045FB4', '0174DF', '0080FF', '2E9AFE', '58ACFA', '81BEF7', 'A9D0F5', '088A85', '04B4AE', '01DFD7', '00FFFF', '2EFEF7', '58FAF4', '81F7F3', 'A9F5F2', 'CEF6F5', '0B610B', '088A08', '04B404', '01DF01', '00FF00', '2EFE2E', '58FA58', '81F781', 'A9F5A9', '21610B', '298A08', '31B404', '3ADF00', '40FF00', '64FE2E', '82FA58', '9FF781', 'BCF5A9', '5E610B', '868A08', 'AEB404', 'D7DF01', 'FFFF00', 'F7FE2E', 'F4FA58', 'F3F781', 'F2F5A9', '61380B', '8A4B08', 'B45F04', 'DF7401', 'FF8000', 'FE9A2E', 'FAAC58', 'F7BE81', 'F5D0A9', '610B0B', '8A0808', 'B40404', 'DF0101', 'FF0000', 'FE2E2E', 'FA5858', 'F78181', 'F5A9A9'];
        var id = self.attr("id") + "_" + dgrm.canvasId;
        var container = '<div id="' + id + '" class="simple_color_palette"></div>';
        $("body").append(container);
        $("#" + id).hide();
        self.click(function () {
            var x = self.offset().left;
            var y = self.offset().top + self.height() + 8;
            $("#" + id).css('left', x);
            $("#" + id).css('top', y);
            $("#" + id).show()
        });
        hideColorPalette = function () {
            $(".simple_color_palette").hide()
        };
        checkColorMouse = function (event) {
            var selector = ".simple_color_palette";
            var selectorParent = $(event.target).parents(selector).length;
            if (event.target == $(selector)[0] || selectorParent > 0) {
                return
            }
            hideColorPalette()
        };
        $(document).bind("mousedown", checkColorMouse);
        $.each(defaultColors, function (i) {
            swatch = $("<div id='" + this + "' class='color_palette_item'>&nbsp;</div>");
            swatch.css("background-color", "#" + this);
            swatch.click(function (event) {
                if (color == 'bgcolor') {
                    dgrm.updateSelectedNodesBGColor("#" + event.target.id);
                    hideColorPalette()
                }
                if (color == 'bordercolor') {
                    dgrm.updateSelectedNodesBorderColor("#" + event.target.id);
                    hideColorPalette()
                }
                if (color == 'fontcolor') {
                    dgrm.updateSelectedNodesFontColor("#" + event.target.id);
                    hideColorPalette()
                }
            });
            swatch.bind("mouseover", function (e) {
                $(this).css("border", "1px solid #AAAAAA")
            });
            swatch.bind("mouseout", function (e) {
                $(this).css("border", "1px solid #EEEEEE")
            });
            swatch.appendTo("#" + id)
        })
    }
})(jQuery);
(function ($) {
    $.fn.simpleFontSizePalette = function (dgrm) {
        var self = $(this);
        defaultFontSizes = ['7pt', '9pt', '11pt', '13pt', '15pt', '17pt'];
        var id = self.attr("id") + "_" + dgrm.canvasId;
        var container = '<div id="' + id + '" class="simple_font_size_palette"></div>';
        $("body").append(container);
        $("#" + id).hide();
        self.click(function () {
            var x = self.offset().left;
            var y = self.offset().top + self.height() + 8;
            $("#" + id).css('left', x);
            $("#" + id).css('top', y);
            $("#" + id).show()
        });
        hideFontSizePalette = function () {
            $(".simple_font_size_palette").hide()
        };
        checkFontSizeMouse = function (event) {
            var selector = ".simple_font_size_palette";
            var selectorParent = $(event.target).parents(selector).length;
            if (event.target == $(selector)[0] || selectorParent > 0) {
                return
            }
            hideFontSizePalette()
        };
        $(document).bind("mousedown", checkFontSizeMouse);
        $.each(defaultFontSizes, function (i) {
            swatch = $("<div id='" + this + "' class='font_size_palette_item' style='font-size:" + this + "'>Font Size</div>");
            swatch.click(function (event) {
                dgrm.updateSelectedNodesFontSize(event.target.id);
                hideFontSizePalette()
            });
            swatch.bind("mouseover", function (e) {
                $(this).css("border", "1px solid #AAAAAA")
            });
            swatch.bind("mouseout", function (e) {
                $(this).css("border", "1px solid #EEEEEE")
            });
            swatch.appendTo("#" + id)
        })
    }
})(jQuery);
(function ($) {
    $.fn.simpleFontFamilyPalette = function (dgrm) {
        var self = $(this);
        defaultFontFamilies = ['Arial', 'Georgia', 'Impact', 'Verdana', 'Monospace', 'Tahoma', 'Serif'];
        var id = self.attr("id") + "_" + dgrm.canvasId;
        var container = '<div id="' + id + '" class="simple_font_family_palette"></div>';
        $("body").append(container);
        $("#" + id).hide();
        self.click(function () {
            var x = self.offset().left;
            var y = self.offset().top + self.height() + 8;
            $("#" + id).css('left', x);
            $("#" + id).css('top', y);
            $("#" + id).show()
        });
        hideFontFamilyPalette = function () {
            $(".simple_font_family_palette").hide()
        };
        checkFontFamilyMouse = function (event) {
            var selector = ".simple_font_family_palette";
            var selectorParent = $(event.target).parents(selector).length;
            if (event.target == $(selector)[0] || selectorParent > 0) {
                return
            }
            hideFontFamilyPalette()
        };
        $(document).bind("mousedown", checkFontFamilyMouse);
        $.each(defaultFontFamilies, function (i) {
            swatch = $("<div id='" + this + "' class='font_family_palette_item' style='font-family:" + this + "'>" + this + "</div>");
            swatch.click(function (event) {
                dgrm.updateSelectedNodesFontType(event.target.id);
                hideFontFamilyPalette()
            });
            swatch.bind("mouseover", function (e) {
                $(this).css("border", "1px solid #AAAAAA")
            });
            swatch.bind("mouseout", function (e) {
                $(this).css("border", "1px solid #EEEEEE")
            });
            swatch.appendTo("#" + id)
        })
    }
})(jQuery);
(function ($) {
    $.fn.simpleBorderWidthPalette = function (dgrm) {
        var self = $(this);
        defaultBorderWidths = ['0', '1', '2', '3', '4', '5', '6', '7'];
        var id = self.attr("id") + "_" + dgrm.canvasId;
        var container = '<div id="' + id + '" class="simple_border_width_palette"></div>';
        $("body").append(container);
        $("#" + id).hide();
        self.click(function () {
            var x = self.offset().left;
            var y = self.offset().top + self.height() + 8;
            $("#" + id).css('left', x);
            $("#" + id).css('top', y);
            $("#" + id).show()
        });
        hideBorderWidthPalette = function () {
            $(".simple_border_width_palette").hide()
        };
        checkBorderWidthMouse = function (event) {
            var selector = ".simple_border_width_palette";
            var selectorParent = $(event.target).parents(selector).length;
            if (event.target == $(selector)[0] || selectorParent > 0) {
                return
            }
            hideBorderWidthPalette()
        };
        $(document).bind("mousedown", checkBorderWidthMouse);
        $.each(defaultBorderWidths, function (i) {
            hrfor = this;
            swatch = $("<div id='" + this + "' class='border_width_palette_item'><hr id='" + this + "_hr' style='border:0;height:" + this + "px;background-color: #000000;'/></div>");
            swatch.click(function (event) {
                dgrm.updateSelectedNodesBorderWidth((event.target.id).replace('_hr', ''));
                hideBorderWidthPalette()
            });
            swatch.bind("mouseover", function (e) {
                $(this).css("border", "1px solid #AAAAAA")
            });
            swatch.bind("mouseout", function (e) {
                $(this).css("border", "1px solid #EEEEEE")
            });
            swatch.appendTo("#" + id)
        })
    }
})(jQuery);
Node = function (params) {
    var node = this;
    if (!params) params = {
        'empty': 'empty'
    };
    node.nodeId = (params["nodeId"]) ? params["nodeId"] : new Date().getTime() + Math.floor(Math.random() * 11111);
	if(node.nodeId) activateClass(node.nodeId, "New Class");
    node.nodeType = (params["nodeType"]) ? params["nodeType"] : "NODE";
	node.ClassName = (params["ClassName"]) ? params["ClassName"] : "New Class";
	node.ClassVar = (params["ClassVar"]) ? params["ClassVar"] : "";
	node.ClassFunc = (params["ClassFunc"]) ? params["ClassFunc"] : "";
    node.nodeContent = (params["nodeContent"]) ? params["nodeContent"] : "New Class";
    node.xPosition = (params["xPosition"]) ? params["xPosition"] : 100;
    node.yPosition = (params["yPosition"]) ? params["yPosition"] : 100;
    node.width = (params["width"]) ? params["width"] : 150;
    node.height = (params["height"]) ? params["height"] : 10;
    node.bgColor = (params["bgColor"]) ? params["bgColor"] : "#FFFFFF";
    node.borderColor = (params["borderColor"]) ? params["borderColor"] : "#C83706";
    node.borderWidth = (params["borderWidth"]) ? params["borderWidth"] : 1;
    node.fontColor = (params["fontColor"]) ? params["fontColor"] : "#333333";
    node.fontSize = (params["fontSize"]) ? params["fontSize"] : "12pt";
    node.fontType = (params["fontType"]) ? params["fontType"] : "맑은 고딕";
    node.minHeight = (params["minHeight"]) ? params["minHeight"] : 40;
    node.maxHeight = (params["maxHeight"]) ? params["maxHeight"] : 400;
    node.minWidth = (params["minWidth"]) ? params["minWidth"] : 40;
    node.maxWidth = (params["maxWidth"]) ? params["maxWidth"] : 500;
    node.nPort = (params["nPort"] == false) ? params["nPort"] : true;
    node.ePort = (params["ePort"] == false) ? params["ePort"] : true;
    node.sPort = (params["sPort"] == false) ? params["sPort"] : true;
    node.wPort = (params["wPort"] == false) ? params["wPort"] : true;
    node.nPortMakeConnection = (params["nPortMakeConnection"] == false) ? params["nPortMakeConnection"] : true;
    node.ePortMakeConnection = (params["ePortMakeConnection"] == false) ? params["ePortMakeConnection"] : true;
    node.sPortMakeConnection = (params["sPortMakeConnection"] == false) ? params["sPortMakeConnection"] : true;
    node.wPortMakeConnection = (params["wPortMakeConnection"] == false) ? params["wPortMakeConnection"] : true;
    node.nPortAcceptConnection = (params["nPortAcceptConnection"] == false) ? params["nPortAcceptConnection"] : true;
    node.ePortAcceptConnection = (params["ePortAcceptConnection"] == false) ? params["ePortAcceptConnection"] : true;
    node.sPortAcceptConnection = (params["sPortAcceptConnection"] == false) ? params["sPortAcceptConnection"] : true;
    node.wPortAcceptConnection = (params["wPortAcceptConnection"] == false) ? params["wPortAcceptConnection"] : true;
    node.image = (params["image"]) ? params["image"] : "images/defaultimage.png";
    node.imageWidth = (params["imageWidth"]) ? params["imageWidth"] : "100";
    node.imageHeight = (params["imageHeight"]) ? params["imageHeight"] : "100";
    node.draggable = (params["draggable"] == false) ? params["draggable"] : true;
    node.resizable = (params["resizable"] == false) ? params["resizable"] : true;
    node.editable = (params["editable"] == false) ? params["editable"] : true;
    node.selectable = (params["selectable"] == false) ? params["selectable"] : true;
    node.deletable = (params["deletable"] == false) ? params["deletable"] : true;
    if (node.width > node.maxWidth) node.width = node.maxWidth;
    if (node.width < node.minWidth) node.width = node.minWidth;
    if (node.height > node.maxHeight) node.height = node.maxHeight;
    if (node.height < node.minHeight) node.height = node.minHeight;
    if (node.nodeType == "NODE") {} else if (node.nodeType == "IMAGE") {
        node.borderWidth = 0;
        node.editable = false;
        if (node.imageWidth < node.minWidth) node.imageWidth = node.minWidth;
        if (node.imageWidth > node.maxWidth) node.imageWidth = node.maxWidth;
        if (node.imageHeight < node.minHeight) node.imageHeight = node.minHeight;
        if (node.imageHeight > node.maxHeight) node.imageHeight = node.maxHeight;
        node.width = parseInt(node.imageWidth) + 24;
        node.height = parseInt(node.imageHeight) + 24
    } else if (node.nodeType == "TEXT") {
        node.borderWidth = 0;
        node.nPort = false;
        node.ePort = false;
        node.sPort = false;
        node.wPort = false
    }
    node.isNew = true;
    node.isModified = false;
    node.isSelected = false;
    node.affectedConnections = []
};
Connection = function (nodeFrom, portFrom, nodeTo, portTo, color, stroke, relation) {
    this.nodeFrom = nodeFrom;
    this.portFrom = portFrom;
    this.nodeTo = nodeTo;
    this.portTo = portTo;
    this.stroke = (stroke) ? stroke : 2;
    this.color = (color) ? color : "#FF0000";
    this.connectionId = '';
	this.relation = (relation) ? relation : 'inheritance'
};
Diagram = function (params) {
    var self = this;
    if (!params) params = {
        'empty': 'empty'
    };
    this.canvid = (params["id"]) ? params["id"] : "dgrm_" + new Date().getTime() + Math.floor(Math.random() * 11111);
    this.xPosition = (params["xPosition"]) ? params["xPosition"] : 305;
    this.yPosition = (params["yPosition"]) ? params["yPosition"] : 100;
    this.width = (params["width"]) ? params["width"] : 1000;
    this.height = (params["height"]) ? params["height"] : 500;
    this.connectionWidth = (params["connectionWidth"]) ? params["connectionWidth"] : 3;
    this.connectionColor = (params["connectionColor"]) ? params["connectionColor"] : '#888888';
    this.height = (params["height"]) ? params["height"] : 500;
    this.imagesPath = (params["imagesPath"]) ? params["imagesPath"] : 'images/';
    this.noToolbar = (params["noToolbar"] == true) ? params["noToolbar"] : false;
    this.toolbar_add_button = (params["toolbar_add_button"] == false) ? params["toolbar_add_button"] : true;
    this.toolbar_save_button = (params["toolbar_save_button"] == false) ? params["toolbar_save_button"] : true;
    this.toolbar_delete_button = (params["toolbar_delete_button"] == false) ? params["toolbar_delete_button"] : true;
    this.toolbar_background_color_button = (params["toolbar_background_color_button"] == false) ? params["toolbar_background_color_button"] : true;
    this.toolbar_border_color_button = (params["toolbar_border_color_button"] == false) ? params["toolbar_border_color_button"] : true;
    this.toolbar_font_color_button = (params["toolbar_font_color_button"] == false) ? params["toolbar_font_color_button"] : true;
    this.toolbar_font_size_button = (params["toolbar_font_size_button"] == false) ? params["toolbar_font_size_button"] : true;
    this.toolbar_font_family_button = (params["toolbar_font_family_button"] == false) ? params["toolbar_font_family_button"] : true;
    this.toolbar_border_width_button = (params["toolbar_border_width_button"] == false) ? params["toolbar_border_width_button"] : true;
    this.onSave = (params["onSave"]) ? params["onSave"] : null;
    this.canvasId = this.canvid;
    this.nodes = [];
    this.connections = [];
    this.hoverEffect = true;
    this.tempLine = null;
    //var diagramcontainer = '<div style="position:relative; left:' + self.xPosition + 'px;top:' + (self.yPosition + 40) + 'px;width:' + (self.width + 4) + 'px;height:' + (self.height + 4) + 'px;z-index:-2;padding:0px; margin:0px;" class="ui-widget-header ui-corner-all"></div>';
	var diagramcontainer = '<div style="position:relative;z-index:-2;padding:0px; margin:0px;" class="ui-widget-header ui-corner-all canvas_area"></div>';
        diagramcontainer += '<div id="' + self.canvid + '" style="position:relative; overflow:auto;border:0px solid;z-index:0;" class="canvas_drawing"><div id="' + self.canvid + '_templine" style="position: absolute;z-index:1000;"></div></div>';
	
    $('#oops_canvas').append(diagramcontainer);
    tmplin = new jsGraphics(self.canvid + '_templine');
    tmplin.setColor(self.connectionColor);
    tmplin.setStroke(self.connectionWidth);
    self.tempLine = tmplin;
    if (this.noToolbar == false) {
        this.mytoolbar = new Toolbar(this, {
            'xPosition': self.xPosition,
            'yPosition': self.yPosition,
            'width': self.width,
            'add_button': self.toolbar_add_button,
            'save_button': self.toolbar_save_button,
            'delete_button': this.toolbar_delete_button,
            'background_color_button': this.toolbar_background_color_button,
            'border_color_button': this.toolbar_border_color_button,
            'font_color_button': this.toolbar_font_color_button,
            'font_size_button': this.toolbar_font_size_button,
            'font_family_button': this.toolbar_font_family_button,
            'border_width_button': this.toolbar_border_width_button
        })
    }

    this.getCanvas = $("#" + self.canvid);
    $("#" + self.canvid).click(function (event) {
        if (!((event.target.id).match(/_content$/)) && !((event.target.id).match(/_imagenode$/))) {
            self.clearSelection()
        }
    });

    // 객체 삽입
    $("#oops_newclass").click(function (event) {
                //arr = self.mytoolbar.getNodeByOrder($(ui.draggable).attr("id").replace("_1231231"));
                self.addNode(new Node({
                    'xPosition': 100,
                    'yPosition': 100
                }))
			    
				
    });

    $("#" + self.canvid).droppable({
        accept: '.node_palette_item',
        drop: function (event, ui) {
            if (($(ui.draggable).attr("id")).indexOf(self.canvid) != -1) {
                arr = self.mytoolbar.getNodeByOrder($(ui.draggable).attr("id").replace("_" + self.canvasId, ""));
                self.addNode(new Node({
                    'nodeType': arr['nodeType'],
                    'nodeContent': arr['nodeContent'],
                    'xPosition': (ui.position.left + $("#" + self.canvid).scrollLeft()),
                    'yPosition': (ui.position.top + $("#" + self.canvid).scrollTop()),
                    'width': arr['width'],
                    'height': arr['height'],
                    'bgColor': arr['bgColor'],
                    'borderColor': arr['borderColor'],
                    'borderWidth': arr['borderWidth'],
                    'fontColor': arr['fontColor'],
                    'fontSize': arr['fontSize'],
                    'fontType': arr['fontType'],
                    'minHeight': arr['minHeight'],
                    'maxHeight': arr['maxHeight'],
                    'minWidth': arr['minWidth'],
                    'maxWidth': arr['maxWidth'],
                    'nPort': arr['nPort'],
                    'ePort': arr['ePort'],
                    'sPort': arr['sPort'],
                    'wPort': arr['wPort'],
                    'image': arr['image'],
                    'imageWidth': arr['imageWidth'],
                    'imageHeight': arr['imageHeight'],
                    'draggable': arr['draggable'],
                    'resizable': arr['resizable'],
                    'editable': arr['editable'],
                    'selectable': arr['selectable'],
                    'deletable': arr['deletable'],
                    'nPortMakeConnection': arr['nPortMakeConnection'],
                    'ePortMakeConnection': arr['ePortMakeConnection'],
                    'sPortMakeConnection': arr['sPortMakeConnection'],
                    'wPortMakeConnection': arr['wPortMakeConnection'],
                    'nPortAcceptConnection': arr['nPortAcceptConnection'],
                    'ePortAcceptConnection': arr['ePortAcceptConnection'],
                    'sPortAcceptConnection': arr['sPortAcceptConnection'],
                    'wPortAcceptConnection': arr['wPortAcceptConnection']
                }))
            }
        }
    });


    var portImage = self.imagesPath + 'redport.png';
    var activePortImage = self.imagesPath + 'greenport.png';
    var portStyle = "<style> ." + self.canvid + "port {width: 12px;height: 12px;border: 1px solid #000;background-color: red;background-repeat:repeat;visibility: hidden;cursor:pointer;} ." + self.canvid + "activeport {width: 12px;height: 12px;border: 1px solid #000;background-color: green;background-image:url('" + activePortImage + "');background-repeat:repeat;}</style>";
    $('body').append(portStyle);
    this.addNode = function (node) {
        var callerObj = this;
        var container = '<div id="' + node.nodeId + '" ';
		if(node.ClassFunc) node.width = node.width * 2;
        container += 'class="ui-widget-content node" style="width: ' + node.width + 'px; height: ' + node.height + 'px;left:' + node.xPosition + 'px; top:' + node.yPosition + 'px ;border:0px; cursor:hand;white-space:nowrap;">';
        container += '<table width="100%" height="100%" cellpadding=0 cellspacing=0 border=0><tr><td colspan=3 width="100%" align=center valign=bottom >';
        if (node.nPort) container += '<div id="' + node.nodeId + '_n" class="' + callerObj.canvasId + 'port"></div>';
        else container += '<div style="width:12px;height:12px;overflow:hidden">&nbsp;</div>';
        container += '</td></tr><tr style="height: 100%;"><td width="1%" valign=middle align=right>';
        if (node.wPort) container += '<div id="' + node.nodeId + '_w" class="' + callerObj.canvasId + 'port"></div>';
        else container += '<div style="width:12px;height:12px;overflow:hidden">&nbsp;</div>';
        container += '</td><td id="' + node.nodeId + '_content"  valign=middle align=center style="border: ' + node.borderWidth + 'px solid #c83706;background-color: ' + node.bgColor + ';FONT-FAMILY: ' + node.fontType + '; COLOR: ' + node.fontColor + '; FONT-SIZE: ' + node.fontSize + ';TEXT-DECORATION: none; ';
		container += '">';
        container += '<div class="ClassBox_Name">' + node.ClassName + '</div>';
		if (node.ClassVar) container += '<div class="ClassBox_Var" style="width: ' + node.width + 'px">' + node.ClassVar + '</div>';
		if (node.ClassFunc) container += '<div class="ClassBox_Func" style="width: ' + node.width + 'px">' + node.ClassFunc + '</div>';
        container += '</td><td width="1%" valign=middle align=left>';
        if (node.ePort) container += '<div id="' + node.nodeId + '_e" class="' + callerObj.canvasId + 'port"></div>';
        else container += '<div style="width:12px;height:12px;overflow:hidden">&nbsp;</div>';
        container += '</td></tr><tr><td colspan=3 width="100%" align=center valign=top>';
        if (node.sPort) container += '<div id="' + node.nodeId + '_s" class="' + callerObj.canvasId + 'port"></div>';
        else container += '<div style="width:12px;height:12px;overflow:hidden">&nbsp;</div>';
        container += '</td></tr></table></div>';
        var ports = "";
        if (node.nPort) ports += "#" + node.nodeId + "_n, ";
        if (node.ePort) ports += "#" + node.nodeId + "_e, ";
        if (node.sPort) ports += "#" + node.nodeId + "_s, ";
        if (node.wPort) ports += "#" + node.nodeId + "_w, ";
        $(callerObj.getCanvas).append(container);
		/*
        $("#" + node.nodeId).hover(function () {
            if (callerObj.hoverEffect) {
                $(ports).css("visibility", "visible")
            }
        }, function () {
            if (callerObj.hoverEffect) {
                $(ports).css("visibility", "hidden")
            }
        });*/
		$('#' + node.nodeId + '_content div:eq(0)').css

		// 객체 드래그
        if (node.draggable) {
            $("#" + node.nodeId).draggable({
                start: function (event, ui) {
                    callerObj.setNodeAffectedConnections(node.nodeId)
                },
                drag: function () {
                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                },
                stop: function () {
                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                }
            })
        }
		// 객체 리사이즈
        if (node.resizable) {
            if (node.ClassVar || node.ClassFunc) $("#" + node.nodeId).resizable({
                handles: "all",
                autoHide: true,
                alsoResize: "#" + node.nodeId + "_imagenode",
                maxHeight: node.maxHeight,
                maxWidth: node.maxWidth,
                minHeight: node.minHeight,
                minWidth: node.minWidth,
                start: function () {
                    callerObj.setNodeAffectedConnections(node.nodeId)
                },
                resize: function () {
                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                },
                stop: function () {
                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                }
            });
            else $("#" + node.nodeId).resizable({
                handles: "all",
                autoHide: true,
                maxHeight: node.maxHeight,
                maxWidth: node.maxWidth,
                minHeight: node.minHeight,
                minWidth: node.minWidth,
                start: function () {
                    callerObj.setNodeAffectedConnections(node.nodeId)
                },
                resize: function () {
                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                },
                stop: function () {
                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                }
            })
        }
        if (node.selectable) {
            $("#" + node.nodeId).click(function (event, ui) {
                callerObj.selectNode(node.nodeId)
            })
        }
        if (node.nPort) {
            if (node.nPortMakeConnection) {
                $("#" + node.nodeId + "_n").draggable({
                    revert: true,
                    revertDuration: 1,
                    start: function () {
                        $("#" + node.nodeId + "").resizable('destroy');
                        $("#" + node.nodeId + "").draggable('destroy');
                        $("#" + node.nodeId + "").unbind('mouseenter mouseleave');
                        $("." + callerObj.canvasId + "port").css("visibility", "visible");
                        $("." + callerObj.canvasId + "port").fadeTo('fast', "0.5");
                        callerObj.hoverEffect = false
                    },
                    drag: function () {
                        dtc("" + node.nodeId, (this.id + "").charAt((this.id + "").length - 1), $(this), callerObj, callerObj.tempLine)
                    },
                    stop: function () {
                        $(ports).css("visibility", "hidden");
                        $("." + callerObj.canvasId + "port").css("visibility", "hidden");
                        $("." + callerObj.canvasId + "port").fadeTo('fast', "1");
                        callerObj.hoverEffect = true;
                        $("#" + node.nodeId).hover(function () {
                            if (callerObj.hoverEffect) {
                                $(ports).css("visibility", "visible")
                            }
                        }, function () {
                            if (callerObj.hoverEffect) {
                                $(ports).css("visibility", "hidden")
                            }
                        });
                        if (node.draggable) {
                            $("#" + node.nodeId).draggable({
                                start: function (event, ui) {
                                    callerObj.setNodeAffectedConnections(node.nodeId)
                                },
                                drag: function () {
                                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                                },
                                stop: function () {
                                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                                }
                            })
                        }
                        if (node.resizable) {
                            if (node.nodeType == 'IMAGE') $("#" + node.nodeId).resizable({
                                handles: "all",
                                autoHide: true,
                                alsoResize: "#" + node.nodeId + "_imagenode",
                                maxHeight: node.maxHeight,
                                maxWidth: node.maxWidth,
                                minHeight: node.minHeight,
                                minWidth: node.minWidth,
                                start: function () {
                                    callerObj.setNodeAffectedConnections(node.nodeId)
                                },
                                resize: function () {
                                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                                },
                                stop: function () {
                                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                                }
                            });
                            else $("#" + node.nodeId).resizable({
                                handles: "all",
                                autoHide: true,
                                maxHeight: node.maxHeight,
                                maxWidth: node.maxWidth,
                                minHeight: node.minHeight,
                                minWidth: node.minWidth,
                                start: function () {
                                    callerObj.setNodeAffectedConnections(node.nodeId)
                                },
                                resize: function () {
                                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                                },
                                stop: function () {
                                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                                }
                            })
                        }
                        if (node.selectable) {
                            $("#" + node.nodeId).click(function (event, ui) {
                                callerObj.selectNode(node.nodeId)
                            })
                        }
                        callerObj.clearTempLine()
                    }
                })
            }
            if (node.nPortAcceptConnection) {
                $("#" + node.nodeId + "_n").droppable({
					
                    accept: "." + callerObj.canvasId + "port",
                    hoverClass: callerObj.canvasId + "activeport",
                    drop: function (event, ui) {
						
                        var sourceNode = $(ui.draggable).attr("id").substring(0, $(ui.draggable).attr("id").indexOf('_'));

                        var targetNode = $(this).attr("id").substring(0, $(this).attr("id").indexOf('_'));
                        var sourceNodePort = $(ui.draggable).attr("id");
                        var targetNodePort = $(this).attr("id");
                        callerObj.clearTempLine();
						node_connect(sourceNode,targetNode);
                        var connection = new Connection(sourceNode, sourceNodePort.charAt(sourceNodePort.length - 1), targetNode, targetNodePort.charAt(targetNodePort.length - 1), callerObj.connectionColor, callerObj.connectionWidth, "inheritance");
                        callerObj.addConnection(connection)
                    }
                })
            }
        }
        if (node.ePort) {
            if (node.ePortMakeConnection) {
                $("#" + node.nodeId + "_e").draggable({
                    revert: true,
                    revertDuration: 1,
                    start: function () {
                        $("#" + node.nodeId + "").resizable('destroy');
                        $("#" + node.nodeId + "").draggable('destroy');
                        $("#" + node.nodeId + "").unbind('mouseenter mouseleave');
                        $("." + callerObj.canvasId + "port").css("visibility", "visible");
                        $("." + callerObj.canvasId + "port").fadeTo('fast', "0.5");
                        callerObj.hoverEffect = false
                    },
                    drag: function () {
                        dtc("" + node.nodeId, (this.id + "").charAt((this.id + "").length - 1), $(this), callerObj, callerObj.tempLine)
                    },
                    stop: function () {
                        $(ports).css("visibility", "hidden");
                        $("." + callerObj.canvasId + "port").css("visibility", "hidden");
                        $("." + callerObj.canvasId + "port").fadeTo('fast', "1");
                        callerObj.hoverEffect = true;
                        $("#" + node.nodeId).hover(function () {
                            if (callerObj.hoverEffect) {
                                $(ports).css("visibility", "visible")
                            }
                        }, function () {
                            if (callerObj.hoverEffect) {
                                $(ports).css("visibility", "hidden")
                            }
                        });
                        if (node.draggable) {
                            $("#" + node.nodeId).draggable({
                                start: function (event, ui) {
                                    callerObj.setNodeAffectedConnections(node.nodeId)
                                },
                                drag: function () {
                                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                                },
                                stop: function () {
                                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                                }
                            })
                        }
                        if (node.resizable) {
                            if (node.nodeType == 'IMAGE') $("#" + node.nodeId).resizable({
                                handles: "all",
                                autoHide: true,
                                alsoResize: "#" + node.nodeId + "_imagenode",
                                maxHeight: node.maxHeight,
                                maxWidth: node.maxWidth,
                                minHeight: node.minHeight,
                                minWidth: node.minWidth,
                                start: function () {
                                    callerObj.setNodeAffectedConnections(node.nodeId)
                                },
                                resize: function () {
                                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                                },
                                stop: function () {
                                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                                }
                            });
                            else $("#" + node.nodeId).resizable({
                                handles: "all",
                                autoHide: true,
                                maxHeight: node.maxHeight,
                                maxWidth: node.maxWidth,
                                minHeight: node.minHeight,
                                minWidth: node.minWidth,
                                start: function () {
                                    callerObj.setNodeAffectedConnections(node.nodeId)
                                },
                                resize: function () {
                                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                                },
                                stop: function () {
                                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                                }
                            })
                        }
                        if (node.selectable) {
                            $("#" + node.nodeId).click(function (event, ui) {
                                callerObj.selectNode(node.nodeId)
                            })
                        }
                        callerObj.clearTempLine()
                    }
                })
            }
            if (node.ePortAcceptConnection) {
                $("#" + node.nodeId + "_e").droppable({
                    accept: "." + callerObj.canvasId + "port",
                    hoverClass: callerObj.canvasId + "activeport",
                    drop: function (event, ui) {
                        var sourceNode = $(ui.draggable).attr("id").substring(0, $(ui.draggable).attr("id").indexOf('_'));
                        var targetNode = $(this).attr("id").substring(0, $(this).attr("id").indexOf('_'));
                        var sourceNodePort = $(ui.draggable).attr("id");
                        var targetNodePort = $(this).attr("id");
						node_connect(sourceNode,targetNode);
                        callerObj.clearTempLine();
                        var connection = new Connection(sourceNode, sourceNodePort.charAt(sourceNodePort.length - 1), targetNode, targetNodePort.charAt(targetNodePort.length - 1), callerObj.connectionColor, callerObj.connectionWidth, "inheritance");
                        callerObj.addConnection(connection)
                    }
                })
            }
        }
        if (node.sPort) {
            if (node.sPortMakeConnection) {
                $("#" + node.nodeId + "_s").draggable({
                    revert: true,
                    revertDuration: 1,
                    start: function () {
                        $("#" + node.nodeId + "").resizable('destroy');
                        $("#" + node.nodeId + "").draggable('destroy');
                        $("#" + node.nodeId + "").unbind('mouseenter mouseleave');
                        $("." + callerObj.canvasId + "port").css("visibility", "visible");
                        $("." + callerObj.canvasId + "port").fadeTo('fast', "0.5");
                        callerObj.hoverEffect = false
                    },
                    drag: function () {
                        dtc("" + node.nodeId, (this.id + "").charAt((this.id + "").length - 1), $(this), callerObj, callerObj.tempLine)
                    },
                    stop: function () {
                        $(ports).css("visibility", "hidden");
                        $("." + callerObj.canvasId + "port").css("visibility", "hidden");
                        $("." + callerObj.canvasId + "port").fadeTo('fast', "1");
                        callerObj.hoverEffect = true;
                        $("#" + node.nodeId).hover(function () {
                            if (callerObj.hoverEffect) {
                                $(ports).css("visibility", "visible")
                            }
                        }, function () {
                            if (callerObj.hoverEffect) {
                                $(ports).css("visibility", "hidden")
                            }
                        });
                        if (node.draggable) {
                            $("#" + node.nodeId).draggable({
                                start: function (event, ui) {
                                    callerObj.setNodeAffectedConnections(node.nodeId)
                                },
                                drag: function () {
                                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                                },
                                stop: function () {
                                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                                }
                            })
                        }
                        if (node.resizable) {
                            if (node.nodeType == 'IMAGE') $("#" + node.nodeId).resizable({
                                handles: "all",
                                autoHide: true,
                                alsoResize: "#" + node.nodeId + "_imagenode",
                                maxHeight: node.maxHeight,
                                maxWidth: node.maxWidth,
                                minHeight: node.minHeight,
                                minWidth: node.minWidth,
                                start: function () {
                                    callerObj.setNodeAffectedConnections(node.nodeId)
                                },
                                resize: function () {
                                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                                },
                                stop: function () {
                                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                                }
                            });
                            else $("#" + node.nodeId).resizable({
                                handles: "all",
                                autoHide: true,
                                maxHeight: node.maxHeight,
                                maxWidth: node.maxWidth,
                                minHeight: node.minHeight,
                                minWidth: node.minWidth,
                                start: function () {
                                    callerObj.setNodeAffectedConnections(node.nodeId)
                                },
                                resize: function () {
                                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                                },
                                stop: function () {
                                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                                }
                            })
                        }
                        if (node.selectable) {
                            $("#" + node.nodeId).click(function (event, ui) {
                                callerObj.selectNode(node.nodeId)
                            })
                        }
                        callerObj.clearTempLine()
                    }
                })
            }
            if (node.sPortAcceptConnection) {
                $("#" + node.nodeId + "_s").droppable({
                    accept: "." + callerObj.canvasId + "port",
                    hoverClass: callerObj.canvasId + "activeport",
                    drop: function (event, ui) {
                        var sourceNode = $(ui.draggable).attr("id").substring(0, $(ui.draggable).attr("id").indexOf('_'));
                        var targetNode = $(this).attr("id").substring(0, $(this).attr("id").indexOf('_'));
                        var sourceNodePort = $(ui.draggable).attr("id");
                        var targetNodePort = $(this).attr("id");
						node_connect(sourceNode,targetNode);
                        callerObj.clearTempLine();
                        var connection = new Connection(sourceNode, sourceNodePort.charAt(sourceNodePort.length - 1), targetNode, targetNodePort.charAt(targetNodePort.length - 1), callerObj.connectionColor, callerObj.connectionWidth, "inheritance");
                        callerObj.addConnection(connection)
                    }
                })
            }
        }
        if (node.wPort) {
            if (node.wPortMakeConnection) {
                $("#" + node.nodeId + "_w").draggable({
                    revert: true,
                    revertDuration: 1,
                    start: function () {
                        $("#" + node.nodeId + "").resizable('destroy');
                        $("#" + node.nodeId + "").draggable('destroy');
                        $("#" + node.nodeId + "").unbind('mouseenter mouseleave');
                        $("." + callerObj.canvasId + "port").css("visibility", "visible");
                        $("." + callerObj.canvasId + "port").fadeTo('fast', "0.5");
                        callerObj.hoverEffect = false
                    },
                    drag: function () {
                        dtc("" + node.nodeId, (this.id + "").charAt((this.id + "").length - 1), $(this), callerObj, callerObj.tempLine)
                    },
                    stop: function () {
                        $(ports).css("visibility", "hidden");
                        $("." + callerObj.canvasId + "port").css("visibility", "hidden");
                        $("." + callerObj.canvasId + "port").fadeTo('fast', "1");
                        callerObj.hoverEffect = true;
                        $("#" + node.nodeId).hover(function () {
                            if (callerObj.hoverEffect) {
                                $(ports).css("visibility", "visible")
                            }
                        }, function () {
                            if (callerObj.hoverEffect) {
                                $(ports).css("visibility", "hidden")
                            }
                        });
                        if (node.draggable) {
                            $("#" + node.nodeId).draggable({
                                start: function (event, ui) {
                                    callerObj.setNodeAffectedConnections(node.nodeId)
                                },
                                drag: function () {
                                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                                },
                                stop: function () {
                                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                                }
                            })
                        }
                        if (node.resizable) {
                            if (node.nodeType == 'IMAGE') $("#" + node.nodeId).resizable({
                                handles: "all",
                                autoHide: true,
                                alsoResize: "#" + node.nodeId + "_imagenode",
                                maxHeight: node.maxHeight,
                                maxWidth: node.maxWidth,
                                minHeight: node.minHeight,
                                minWidth: node.minWidth,
                                start: function () {
                                    callerObj.setNodeAffectedConnections(node.nodeId)
                                },
                                resize: function () {
                                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                                },
                                stop: function () {
                                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                                }
                            });
                            else $("#" + node.nodeId).resizable({
                                handles: "all",
                                autoHide: true,
                                maxHeight: node.maxHeight,
                                maxWidth: node.maxWidth,
                                minHeight: node.minHeight,
                                minWidth: node.minWidth,
                                start: function () {
                                    callerObj.setNodeAffectedConnections(node.nodeId)
                                },
                                resize: function () {
                                    callerObj.redrawNodeAffectedConnections(node.nodeId)
                                },
                                stop: function () {
                                    callerObj.updateNodeCoordinates(node.nodeId, $("#" + node.nodeId).position().left + $(callerObj.getCanvas).scrollLeft(), $("#" + node.nodeId).position().top + $(callerObj.getCanvas).scrollTop(), $("#" + node.nodeId).width(), $("#" + node.nodeId).height())
                                }
                            })
                        }
                        if (node.selectable) {
                            $("#" + node.nodeId).click(function (event, ui) {
                                callerObj.selectNode(node.nodeId)
                            })
                        }
                        callerObj.clearTempLine()
                    }
                })
            }
            if (node.wPortAcceptConnection) {
                $("#" + node.nodeId + "_w").droppable({
                    accept: "." + callerObj.canvasId + "port",
                    hoverClass: callerObj.canvasId + "activeport",
                    drop: function (event, ui) {
                        var sourceNode = $(ui.draggable).attr("id").substring(0, $(ui.draggable).attr("id").indexOf('_'));
                        var targetNode = $(this).attr("id").substring(0, $(this).attr("id").indexOf('_'));
                        var sourceNodePort = $(ui.draggable).attr("id");
                        var targetNodePort = $(this).attr("id");
						node_connect(sourceNode,targetNode);
                        callerObj.clearTempLine();
                        var connection = new Connection(sourceNode, sourceNodePort.charAt(sourceNodePort.length - 1), targetNode, targetNodePort.charAt(targetNodePort.length - 1), callerObj.connectionColor, callerObj.connectionWidth, "inheritance");
                        callerObj.addConnection(connection)
                    }
                })
            }
        }
        if (node.editable) $("#" + node.nodeId + "_content")._t(node.nodeId, callerObj);
        this.nodes[this.nodes.length] = node
    };
    this.addConnection = function (connection) {
        caller = this;
        var connectionId = "" + new Date().getTime() + Math.floor(Math.random() * 11111);
        var connectionDiv = '<div id="' + connectionId + '" ></div>';
        $(caller.getCanvas).append(connectionDiv);
        var connectionLine = new jsGraphics(document.getElementById(connectionId));
        $("#" + connectionId).click(function () {
            caller.deleteConnection(connectionId,connection)
        });
        connectionLine.setColor(connection.color);
        connectionLine.setStroke(connection.stroke);
        connection.line = connectionLine;
        connection.connectionId = connectionId;
        this.connections[this.connections.length] = connection;
        dc(connection.nodeFrom, connection.nodeTo, connection.portFrom, connection.portTo, connection.line, caller, connection.relation)
    };
    this.deleteConnection = function (connectionId,connection) {
		$("#diagram_relation").show();
		select_node = connection;
		select_nodeId = connectionId;
    };
    this.RemoveConnection = function (connectionId,connection) {
		if (confirm('관계를 지우시겠습니까?')) {
            var conn = '';
            for (i = 0; i < this.connections.length; i++) {
                if (this.connections[i].connectionId == connectionId) {
                    this.connections[i].line.clear();
                    this.connections.splice(i, 1);
					// 지환아 여기에 3개 인수를 알아주면 된다.
					// 뻗어나가는쪽 노드아이디, 화살표쪽 노드아이디, 화살표쪽 클래스이름
					//deleteRelation(sourceNodeID, targetNodeID, targetClassName);
                    break;
                }
            }
        }
    };
    this.setNodeAffectedConnections = function (nodeId) {
        affected = [];
        for (i = 0; i < this.connections.length; i++) if (this.connections[i].nodeFrom == nodeId || this.connections[i].nodeTo == nodeId) affected.push(this.connections[i]);
        for (i = 0; i < this.nodes.length; i++) if (this.nodes[i].nodeId == nodeId) this.nodes[i].affectedConnections = affected
    };
    this.redrawNodeAffectedConnections = function (nodeId) {
        var caller = this;
        var node = '';
        for (i = 0; i < this.nodes.length; i++) if (this.nodes[i].nodeId == nodeId) node = this.nodes[i];
        var affectedConnections = node.affectedConnections;
        for (i = 0; i < affectedConnections.length; i++) {
            dc(affectedConnections[i].nodeFrom, affectedConnections[i].nodeTo, affectedConnections[i].portFrom, affectedConnections[i].portTo, affectedConnections[i].line, caller, affectedConnections[i].relation)
        }
    };
    this.selectNode = function (nodeId) {
        for (i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].nodeId == nodeId) {
                this.nodes[i].isSelected = true;
                $("#" + this.nodes[i].nodeId + "_content").css({
                    "border": "2px dotted red"
                })
            }
        }
    };
    this.clearSelection = function () {
        for (i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].isSelected) {
                this.nodes[i].isSelected = false;
                $("#" + this.nodes[i].nodeId + "_content").css({
                    "border": this.nodes[i].borderWidth + "px solid " + this.nodes[i].borderColor
                })
            }
        }
    };
    this.getSelectedNodes = function () {
        var selections = [];
        for (i = 0; i < this.nodes.length; i++) if (this.nodes[i].isSelected)
		{
			selections.push(this.nodes[i]);
		}
        return selections
    };
    this.updateNodeCoordinates = function (nodeId, xPosition, yPosition, width, height) {
        var node = this.getNodeById(nodeId);
        node.xPosition = xPosition;
        node.yPosition = yPosition;
        node.width = width;
        node.height = height
    };
    this.updateNodeBGColor = function (nodeId, bgcolor) {
        var node = this.getNodeById(nodeId);
        node.bgColor = bgcolor;
        $("#" + nodeId + "_content").css('background-color', bgcolor)
    };
    this.updateNodeBorderColor = function (nodeId, bordercolor) {
        var node = this.getNodeById(nodeId);
        node.borderColor = bordercolor;
        $("#" + nodeId + "_content").css('border-color', bordercolor)
    };
    this.updateNodeBorderWidth = function (nodeId, borderWidth) {
        var node = this.getNodeById(nodeId);
        node.borderWidth = borderWidth;
        $("#" + nodeId + "_content").css('border-width', borderWidth)
    };
    this.updateNodeFontColor = function (nodeId, fontColor) {
        var node = this.getNodeById(nodeId);
        node.fontColor = fontColor;
        $("#" + nodeId + "_content").css('color', fontColor)
    };
    this.updateNodeFontSize = function (nodeId, fontSize) {
        var node = this.getNodeById(nodeId);
        node.fontSize = fontSize;
        $("#" + nodeId + "_content").css('font-size', fontSize)
    };
    this.updateNodeFontType = function (nodeId, fontType) {
        var node = this.getNodeById(nodeId);
        node.fontType = fontType;
        $("#" + nodeId + "_content").css('font-family', fontType)
    };
    this.updateNodeContent = function (nodeId, nodeContent) {
        var node = this.getNodeById(nodeId);
        node.nodeContent = nodeContent
    };
    this.updateSelectedNodesBGColor = function (bgcolor) {
        var selectedNodes = this.getSelectedNodes();
        for (index = 0; index < selectedNodes.length; index++) {
            this.updateNodeBGColor(selectedNodes[index].nodeId, bgcolor)
        }
    };
    this.updateSelectedNodesBorderColor = function (bordercolor) {
        var selectedNodes = this.getSelectedNodes();
        for (index = 0; index < selectedNodes.length; index++) {
            this.updateNodeBorderColor(selectedNodes[index].nodeId, bordercolor)
        }
    };
    this.updateSelectedNodesBorderWidth = function (borderWidth) {
        var selectedNodes = this.getSelectedNodes();
        for (index = 0; index < selectedNodes.length; index++) {
            this.updateNodeBorderWidth(selectedNodes[index].nodeId, borderWidth)
        }
    };
    this.updateSelectedNodesFontColor = function (fontcolor) {
        var selectedNodes = this.getSelectedNodes();
        for (index = 0; index < selectedNodes.length; index++) {
            this.updateNodeFontColor(selectedNodes[index].nodeId, fontcolor)
        }
    };
    this.updateSelectedNodesFontSize = function (fontSize) {
        var selectedNodes = this.getSelectedNodes();
        for (index = 0; index < selectedNodes.length; index++) {
            this.updateNodeFontSize(selectedNodes[index].nodeId, fontSize)
        }
    };
    this.updateSelectedNodesFontType = function (fontType) {
        var selectedNodes = this.getSelectedNodes();
        for (index = 0; index < selectedNodes.length; index++) {
            this.updateNodeFontType(selectedNodes[index].nodeId, fontType)
        }
    };
    this.deleteSelectedNodes = function () {
        var selectedNodes = this.getSelectedNodes();
        if (selectedNodes.length > 0) {
            if (confirm("선택한 클래스를 삭제하시겠습니까?")) {
                for (index = 0; index < selectedNodes.length; index++) {
					//seolhee
					deleteClassNamenNodeId(selectedNodes[index].nodeId);
                    this.deleteNode(selectedNodes[index].nodeId)
					
                }
            }
        }
    };
    this.deleteNode = function (nodeId) {
        this.setNodeAffectedConnections(nodeId);
        var node = this.getNodeById(nodeId);
        var nodeType = node.nodeType;
        for (i = 0; i < node.affectedConnections.length; i++) {
            for (j = 0; j < this.connections.length; j++) {
                if (this.connections[j].nodeFrom == node.affectedConnections[i].nodeFrom && this.connections[j].nodeTo == node.affectedConnections[i].nodeTo && this.connections[j].portFrom == node.affectedConnections[i].portFrom && this.connections[j].portTo == node.affectedConnections[i].portTo) {
                    this.connections[j].line.clear();
                    this.connections.splice(j, 1);
                    break
                }
            }
        }
        for (i = 0; i < this.nodes.length; i++) if (this.nodes[i].nodeId == nodeId) this.nodes.splice(i, 1);
        $("#" + nodeId).remove()
    };
    this.getNodeById = function (nodeId) {
        for (i = 0; i < this.nodes.length; i++) if (this.nodes[i].nodeId == nodeId) return this.nodes[i]
    };
	this.toJSON = function () {
		//var json_data = JSON.stringify(this.nodes);
		//var json_conn  = JSON.stringify(this.connections);
        var json_data = '[';
        for (i = 0; i < this.nodes.length; i++)
		{
			if(i>0) json_data += ',';
			json_data += '{"nodeId":"' + this.nodes[i].nodeId + '","nodeType":"' + this.nodes[i].nodeType + '","nodeContent":"' + this.nodes[i].nodeContent + '","xPosition":"' + this.nodes[i].xPosition + '","yPosition":"' + this.nodes[i].yPosition + '","width":"' + this.nodes[i].width + '","height":"' + this.nodes[i].height + '","bgColor":"' + this.nodes[i].bgColor + '","borderColor":"' + this.nodes[i].borderColor + '","borderWidth":"' + this.nodes[i].borderWidth + '","fontColor":"' + this.nodes[i].fontColor + '","fontSize":"' + this.nodes[i].fontSize + '","fontType":"' + this.nodes[i].fontType + '","minHeight":"' + this.nodes[i].minHeight + '","maxHeight":"' + this.nodes[i].maxHeight + '","minWidth":"' + this.nodes[i].minWidth + '","maxWidth":"' + this.nodes[i].maxWidth + '","nPort":"' + this.nodes[i].nPort + '","ePort":"' + this.nodes[i].ePort + '","sPort":"' + this.nodes[i].sPort + '","wPort":"' + this.nodes[i].wPort + '","nPortMakeConnection":"' + this.nodes[i].nPortMakeConnection + '","ePortMakeConnection":"' + this.nodes[i].ePortMakeConnection + '","sPortMakeConnection":"' + this.nodes[i].sPortMakeConnection + '","wPortMakeConnection":"' + this.nodes[i].wPortMakeConnection + '","nPortAcceptConnection":"' + this.nodes[i].nPortAcceptConnection + '","ePortAcceptConnection":"' + this.nodes[i].ePortAcceptConnection + '","sPortAcceptConnection":"' + this.nodes[i].sPortAcceptConnection + '","wPortAcceptConnection":"' + this.nodes[i].wPortAcceptConnection + '","image":"' + this.nodes[i].image + '","imageWidth":"' + this.nodes[i].imageWidth + '","imageHeight":"' + this.nodes[i].imageHeight + '","draggable":"' + this.nodes[i].draggable + '","resizable":"' + this.nodes[i].resizable + '","editable":"' + this.nodes[i].editable + '","selectable":"' + this.nodes[i].selectable + '","deletable":"' + this.nodes[i].deletable + '"}';
		}
		json_data += ']';
        var json_conn = '[';
        for (i = 0; i < this.connections.length; i++)
		{
		    if(i>0) json_conn += ',';
		    json_conn += '{"connectionId":"' + this.connections[i].connectionId + '","nodeFrom":"' + this.connections[i].nodeFrom + '","nodeTo":"' + this.connections[i].nodeTo + '","portFrom":"' + this.connections[i].portFrom + '","portTo":"' + this.connections[i].portTo + '","color":"' + this.connections[i].color + '","stroke":"' + this.connections[i].stroke + '"}';
		}
		json_conn += ']';
		localStorage.setItem("diagram_class_resource", json_data);
		localStorage.setItem("diagram_conn_resource", json_conn);
	}
	this.clearCanvas = function() {
         for (i = 0; i < this.connections.length; i++) {
                    this.connections[i].line.clear();
        }
        for (i = 0; i < this.nodes.length; i++)
		{
					this.nodes[i].isSelected = true;
		}
        var selectedNodes = this.getSelectedNodes();
        if (selectedNodes.length > 0) {
                for (index = 0; index < selectedNodes.length; index++) {
                    this.deleteNode(selectedNodes[index].nodeId)
                }
        }

	}

	this.fromJSON = function () {
		function Access_Code_Change(Access){
			if(Access == "public"){
				return "+";
			} else if(Access == "protected"){
				return "#";
			} else if(Access == "private"){
				return "-";
			} else {
				return Access;
			}
		}
		var load_class = JSON.parse(localStorage.getItem("diagram_class_resource"));
		var load_conn = JSON.parse(localStorage.getItem("diagram_conn_resource"));

		if(load_class)
		{
			for(i = 0; i<load_class.length; i++)
			{
				var temp_var = "";
				var temp_var_count =  JSON.parse(localStorage.getItem(load_class[i].nodeId + "_varCnt"));
				for(j = 0; j<temp_var_count ; j++){
					 var var_texter = JSON.parse(localStorage.getItem(load_class[i].nodeId + "_var_" + j));
					 if(j>0) temp_var += "<br>";
					 temp_var += Access_Code_Change(var_texter.access) + " " + var_texter.data + " " + var_texter.name;
				}

				var temp_func = "";
				var temp_func_count =  JSON.parse(localStorage.getItem(load_class[i].nodeId + "_funcCnt"));
				for(k = 0; k<temp_func_count ; k++){
					 var func_texter = JSON.parse(localStorage.getItem(load_class[i].nodeId + "_func_" + k));
					 if(k>0) temp_func += "<br>";
					 temp_func += Access_Code_Change(func_texter.access) + " " + func_texter.returns + " " + func_texter.name  + "(" + func_texter.param + ")";
				}
				// 파싱 데이터 불러오기
				self.addNode(new Node({
							'nodeId': load_class[i].nodeId,
							'nodeType': load_class[i].nodeType,
							'nodeContent': load_class[i].nodeContent,
							'ClassName': load_class[i].nodeContent,
							'ClassVar': temp_var,
							'ClassFunc': temp_func,
							'xPosition': load_class[i].xPosition,
							'yPosition': load_class[i].yPosition,
							'affectedConnections':[]
				}))
			}
							
		} else alert("저장된 데이터 없음");


		if(load_conn)
		{
			for(i = 0; i<load_conn.length; i++)
			{
				var connection = new Connection(load_conn[i].nodeFrom,  load_conn[i].portFrom,  load_conn[i].nodeTo,  load_conn[i].portTo, load_conn[i].color, load_conn[i].stroke,  load_conn[i].relation);
				this.addConnection(connection);
			}
		}

	}


    this.toXML = function () {
        var xml = '<diagram id="' + $(this.getCanvas).attr("id") + '">\n';
        for (i = 0; i < this.nodes.length; i++) xml += '<node nodeId="' + this.nodes[i].nodeId + '" nodeType="' + this.nodes[i].nodeType + '" nodeContent="' + this.nodes[i].nodeContent + '" xPosition="' + this.nodes[i].xPosition + '" yPosition="' + this.nodes[i].yPosition + '" width="' + this.nodes[i].width + '" height="' + this.nodes[i].height + '" bgColor="' + this.nodes[i].bgColor + '" borderColor="' + this.nodes[i].borderColor + '" borderWidth="' + this.nodes[i].borderWidth + '" fontColor="' + this.nodes[i].fontColor + '" fontSize="' + this.nodes[i].fontSize + '" fontType="' + this.nodes[i].fontType + '" minHeight="' + this.nodes[i].minHeight + '" maxHeight="' + this.nodes[i].maxHeight + '" minWidth="' + this.nodes[i].minWidth + '" maxWidth="' + this.nodes[i].maxWidth + '" nPort="' + this.nodes[i].nPort + '" ePort="' + this.nodes[i].ePort + '" sPort="' + this.nodes[i].sPort + '" wPort="' + this.nodes[i].wPort + '" nPortMakeConnection="' + this.nodes[i].nPortMakeConnection + '" ePortMakeConnection="' + this.nodes[i].ePortMakeConnection + '" sPortMakeConnection="' + this.nodes[i].sPortMakeConnection + '" wPortMakeConnection="' + this.nodes[i].wPortMakeConnection + '" nPortAcceptConnection="' + this.nodes[i].nPortAcceptConnection + '" ePortAcceptConnection="' + this.nodes[i].ePortAcceptConnection + '" sPortAcceptConnection="' + this.nodes[i].sPortAcceptConnection + '" wPortAcceptConnection="' + this.nodes[i].wPortAcceptConnection + '" image="' + this.nodes[i].image + '" imageWidth="' + this.nodes[i].imageWidth + '" imageHeight="' + this.nodes[i].imageHeight + '" draggable="' + this.nodes[i].draggable + '" resizable="' + this.nodes[i].resizable + '" editable="' + this.nodes[i].editable + '" selectable="' + this.nodes[i].selectable + '" deletable="' + this.nodes[i].deletable + '" />\n';
        for (i = 0; i < this.connections.length; i++) xml += '<connection connectionId="' + this.connections[i].connectionId + '" nodeFrom="' + this.connections[i].nodeFrom + '" nodeTo="' + this.connections[i].nodeTo + '" portFrom="' + this.connections[i].portFrom + '" portTo="' + this.connections[i].portTo + '" color="' + this.connections[i].color + '"  stroke="' + this.connections[i].stroke + '"/>\n';
        xml += '</diagram>';
		//alert(xml);
        if (this.onSave != null) {
            this.onSave(xml)
        } else {}
    };
    this.setTempLine = function (tempLine) {
        this.tempLine = tempLine
    };
    this.clearTempLine = function () {
        this.tempLine.clear()
    }
};
//  라인생성
function dc(sourceNode, targetNode, sourcePort, targetPort, line, canvasobj, relation) {
    sourcePort = sourceNode + "_" + sourcePort;
    targetPort = targetNode + "_" + targetPort;
    var startx = $("#" + sourcePort).position().left + $("#" + sourceNode + " table").position().left + $(canvasobj.getCanvas).scrollLeft();
    var starty = $("#" + sourcePort).position().top + $("#" + sourceNode + " table").position().top + $(canvasobj.getCanvas).scrollTop();
    var endx = $("#" + targetPort).position().left + $("#" + targetNode).position().left + $(canvasobj.getCanvas).scrollLeft();
    var endy = $("#" + targetPort).position().top + $("#" + targetNode).position().top + $(canvasobj.getCanvas).scrollTop();
    var sourceNodeX = $("#" + sourceNode).position().left + $(canvasobj.getCanvas).scrollLeft();
    var sourceNodeY = $("#" + sourceNode).position().top + $(canvasobj.getCanvas).scrollTop();
    var sourcenw = $("#" + sourceNode + " table").width();
    var sourcenh = $("#" + sourceNode + " table").height();
    var halfSourcenw = Math.floor($("#" + sourceNode).width() / 2);
    var halfSourcenh = Math.floor($("#" + sourceNode).height() / 2);
    var targetNodeX = $("#" + targetNode).position().left + 10 + $(canvasobj.getCanvas).scrollLeft();
    var targetNodeY = $("#" + targetNode).position().top + 10 + $(canvasobj.getCanvas).scrollTop();
    var targetnw = $("#" + targetNode + " table").width();
    var targetnh = $("#" + targetNode + " table").height();
    var halfTargetnw = Math.floor(targetnw / 2);
    var halfTargetnh = Math.floor(targetnh / 2);
    var zone;
    var sourcePortNumber;
    var targetPortNumber;
    var halfVerticalDistance;
    var halfHorizontalDistance;
    var maxRightDistance = ((sourceNodeX + sourcenw) > (targetNodeX + targetnw)) ? sourceNodeX + sourcenw : targetNodeX + targetnw;
    var minLeftDistance = (sourceNodeX < targetNodeX) ? sourceNodeX : targetNodeX;
    var minTopDistance = (sourceNodeY < targetNodeY) ? sourceNodeY : targetNodeY;
    var maxBottomDistance = ((sourceNodeY + sourcenh) > (targetNodeY + targetnh)) ? sourceNodeY + sourcenh : targetNodeY + targetnh ;
    if (sourcePort.match(/_n$/)) {
        sourcePortNumber = 1
    } else if (sourcePort.match(/_e$/)) {
        sourcePortNumber = 2
    } else if (sourcePort.match(/_s$/)) {
        sourcePortNumber = 3
    } else if (sourcePort.match(/_w$/)) {
        sourcePortNumber = 4
    }
    if (targetPort.match(/_n$/)) {
        targetPortNumber = 1
    } else if (targetPort.match(/_e$/)) {
        targetPortNumber = 2
    } else if (targetPort.match(/_s$/)) {
        targetPortNumber = 3
    } else if (targetPort.match(/_w$/)) {
        targetPortNumber = 4
    }

	//  직각 라인 방향 결정
    var connectionType = parseInt(sourcePortNumber + "" + targetPortNumber);

    this.drawArrow = function (shape) {
		if(relation == "inheritance"){
			if(shape == "down"){
			line.drawPolygon(new Array(endx - 5, endx + 5, endx), new Array(endy - 5, endy - 5, endy + 5));
		    }
			else if(shape == "up"){
			line.drawPolygon(new Array(endx - 5, endx, endx + 5), new Array(endy + 5, endy - 5, endy + 5));
		    }
			else if(shape == "left"){
			line.drawPolygon(new Array(endx - 5 , endx -5 , endx + 5), new Array(endy + 5, endy - 5, endy));
		    }
			else if(shape == "right"){
			line.drawPolygon(new Array(endx + 5, endx + 5, endx - 5), new Array(endy + 5, endy - 5, endy));
		    }
		} else if(relation == "composition"){
			line.fillPolygon(new Array(endx, endx - 5, endx, endx + 5 ), new Array(endy - 5, endy, endy + 5 , endy));
		} else if(relation == "aggregation"){
			line.drawPolygon(new Array(endx, endx - 5, endx, endx + 5 ), new Array(endy - 5, endy, endy + 5 , endy));
		} else if(relation == "association"){
		} else if(relation == "dependency"){
			if(shape == "down"){
			line.drawPolyline(new Array(endx - 5, endx, endx + 5), new Array(endy - 5, endy + 5, endy - 5));
		    }
			else if(shape == "up"){
			line.drawPolyline(new Array(endx - 5, endx, endx + 5), new Array(endy + 5, endy - 5, endy + 5));
		    }
			else if(shape == "left"){
			line.drawPolyline(new Array(endx - 5, endx + 5, endx - 5), new Array(endy - 5, endy, endy + 5));
		    }
			else if(shape == "right"){
			line.drawPolyline(new Array(endx + 5, endx - 5, endx + 5), new Array(endy - 5, endy, endy + 5));
		    }
		}
	}
    if (endx <= (sourceNodeX + halfSourcenw)) {
        if (endy <= (sourceNodeY + halfSourcenh)) {
            if (endy <= sourceNodeY) {
                if (endy >= sourceNodeY - 10 && endx > sourceNodeX) {
                    zone = "Z1A10"
                } else {
                    if (endx <= sourceNodeX - 10) {
                        zone = "Z8";
                        switch (connectionType) {
                            case 11:
                                zone = "NN ---> Z8";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 15);
                                line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 15, endx, minTopDistance - 15);
                                line.drawLine(endx, minTopDistance - 15, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 12:
                                zone = "NE ---> Z8";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, endy);
                                line.drawLine((sourceNodeX) + halfSourcenw, endy, endx, endy);
                                this.drawArrow("right");
                                line.paint();
                                break;
                            case 13:
                                zone = "NS ---> Z8";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine((sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), endx, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine(endx, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 14:
                                zone = "NW ---> Z8";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine((sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), targetNodeX - 10, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine(targetNodeX - 10, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), targetNodeX - 10, endy);
                                line.drawLine(targetNodeX - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 21:
                                zone = "EN ---> Z8";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, minTopDistance - 10);
                                line.drawLine(maxRightDistance + 10, minTopDistance - 10, endx, minTopDistance - 10);
                                line.drawLine(endx, minTopDistance - 10, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 22:
                                zone = "EE ---> Z8";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, endy);
                                line.drawLine(maxRightDistance + 10, endy, endx, endy);
                                this.drawArrow("right");
                                line.paint();
                                break;
                            case 23:
                                zone = "ES ---> Z8";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(sourceNodeX + sourcenw + 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(endx, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 24:
                                zone = "EW ---> Z8";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, endy);
                                line.drawLine(targetNodeX - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 31:
                                zone = "SN ---> Z8";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + sourcenh + 10);
                                line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + sourcenh + 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy - 10);
                                line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy - 10, endx, endy - 10);
                                line.drawLine(endx, endy - 10, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 32:
                                zone = "SE ---> Z8";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + sourcenh + 10);
                                line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + sourcenh + 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy);
                                line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy, endx, endy);
                                this.drawArrow("right");
                                line.paint();
                                break;
                            case 33:
                                zone = "SS ---> Z8";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                                line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 34:
                                zone = "SW ---> Z8";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, minLeftDistance - 10, maxBottomDistance + 10);
                                line.drawLine(minLeftDistance - 10, maxBottomDistance + 10, minLeftDistance - 10, endy);
                                line.drawLine(minLeftDistance - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 41:
                                zone = "WN ---> Z8";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY - 10);
                                line.drawLine(sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY - 10, endx, targetNodeY - 10);
                                line.drawLine(endx, targetNodeY - 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 42:
                                zone = "WE ---> Z8";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, (targetNodeX + targetnw) + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh);
                                line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy);
                                line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy, endx, endy);
                                this.drawArrow("right");
                                line.paint();
                                break;
                            case 43:
                                zone = "WS ---> Z8";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, endx, sourceNodeY + halfSourcenh);
                                line.drawLine(endx, sourceNodeY + halfSourcenh, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 44:
                                zone = "WW ---> Z8";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, endy);
                                line.drawLine(minLeftDistance - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break
                        }
                    } else {
                        zone = "Z1A";
                        switch (connectionType) {
                            case 11:
                                zone = "NN ---> Z1A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, sourceNodeY - 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY - 10, minLeftDistance - 10, sourceNodeY - 10);
                                line.drawLine(minLeftDistance - 10, sourceNodeY - 10, minLeftDistance - 10, endy - 10);
                                line.drawLine(minLeftDistance - 10, endy - 10, endx, endy - 10);
                                line.drawLine(endx, endy - 10, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 12:
                                zone = "NE ---> Z1A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, endy);
                                line.drawLine((sourceNodeX) + halfSourcenw, endy, endx, endy);
                                this.drawArrow("right");
                                line.paint();
                                break;
                            case 13:
                                zone = "NS ---> Z1A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine((sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), endx, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine(endx, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 14:
                                zone = "NW ---> Z1A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine((sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), targetNodeX - 10, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine(targetNodeX - 10, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), targetNodeX - 10, endy);
                                line.drawLine(targetNodeX - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 21:
                                zone = "EN ---> Z1A";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, minTopDistance - 10);
                                line.drawLine(maxRightDistance + 10, minTopDistance - 10, endx, minTopDistance - 10);
                                line.drawLine(endx, minTopDistance - 10, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 22:
                                zone = "EE ---> Z1A";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, endy);
                                line.drawLine(maxRightDistance + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 23:
                                zone = "ES ---> Z1A";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(sourceNodeX + sourcenw + 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(endx, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 24:
                                zone = "EW ---> Z1A";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, endy);
                                line.drawLine(targetNodeX - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 31:
                                zone = "SN ---> Z1A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, minLeftDistance - 10, sourceNodeY + sourcenh + 10);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + sourcenh + 10, minLeftDistance - 10, minTopDistance - 10);
                                line.drawLine(minLeftDistance - 10, minTopDistance - 10, endx, minTopDistance - 10);
                                line.drawLine(endx, minTopDistance - 10, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 32:
                                zone = "SE ---> Z1A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, maxRightDistance + 10, maxBottomDistance + 10);
                                line.drawLine(maxRightDistance + 10, maxBottomDistance + 10, maxRightDistance + 10, endy);
                                line.drawLine(maxRightDistance + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 33:
                                zone = "SS ---> Z1A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, sourceNodeX - 10, sourceNodeY + sourcenh + 10);
                                line.drawLine(sourceNodeX - 10, sourceNodeY + sourcenh + 10, sourceNodeX - 10, targetNodeY + targetnh + 10);
                                line.drawLine(sourceNodeX - 10, targetNodeY + targetnh + 10, endx, targetNodeY + targetnh + 10);
                                line.drawLine(endx, targetNodeY + targetnh + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 34:
                                zone = "SW ---> Z1A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, minLeftDistance - 10, maxBottomDistance + 10);
                                line.drawLine(minLeftDistance - 10, maxBottomDistance + 10, minLeftDistance - 10, endy);
                                line.drawLine(minLeftDistance - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 41:
                                zone = "WN ---> Z1A";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, minTopDistance - 10);
                                line.drawLine(minLeftDistance - 10, minTopDistance - 10, endx, minTopDistance - 10);
                                line.drawLine(endx, minTopDistance - 10, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 42:
                                zone = "WE ---> Z1A";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(sourceNodeX - 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx + 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(endx + 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx + 10, endy);
                                line.drawLine(endx + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 43:
                                zone = "WS ---> Z1A";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(sourceNodeX - 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(endx, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 44:
                                zone = "WW ---> Z1A";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, endy);
                                line.drawLine(minLeftDistance - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break
                        }
                    }
                }
            } else {
                if (endx <= sourceNodeX - 10) {
                    zone = "Z7B";
                    switch (connectionType) {
                        case 11:
                            zone = "NN ---> Z7B";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 15);
                            line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 15, endx, minTopDistance - 15);
                            line.drawLine(endx, minTopDistance - 15, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 12:
                            zone = "NE ---> Z7B";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 10, targetNodeX + targetnw + 10, minTopDistance - 10);
                            line.drawLine(targetNodeX + targetnw + 10, minTopDistance - 10, targetNodeX + targetnw + 10, endy);
                            line.drawLine(targetNodeX + targetnw + 10, endy, endx, endy);
                            this.drawArrow("right");
                            line.paint();
                            break;
                        case 13:
                            zone = "NS ---> Z7B";
                            line.clear();
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, sourceNodeY - 10);
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY - 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY - 10);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY - 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY + targetnh + 10);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY + targetnh + 10, endx, targetNodeY + targetnh + 10);
                            line.drawLine(endx, targetNodeY + targetnh + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 14:
                            zone = "NW ---> Z7B";
                            line.clear();
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, minTopDistance - 10);
                            line.drawLine(sourceNodeX + halfSourcenw, minTopDistance - 10, targetNodeX - 10, minTopDistance - 10);
                            line.drawLine(targetNodeX - 10, minTopDistance - 10, targetNodeX - 10, endy);
                            line.drawLine(targetNodeX - 10, endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break;
                        case 21:
                            zone = "EN ---> Z7B";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                            line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, minTopDistance - 10);
                            line.drawLine(maxRightDistance + 10, minTopDistance - 10, endx, minTopDistance - 10);
                            line.drawLine(endx, minTopDistance - 10, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 22:
                            zone = "EE ---> Z7B";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                            line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY - 10);
                            line.drawLine(maxRightDistance + 10, sourceNodeY - 10, endx + 10, sourceNodeY - 10);
                            line.drawLine(endx + 10, sourceNodeY - 10, endx + 10, endy);
                            line.drawLine(endx + 10, endy, endx, endy);
                            this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                            line.paint();
                            break;
                        case 23:
                            zone = "ES ---> Z7B";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                            line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, maxBottomDistance + 10);
                            line.drawLine(maxRightDistance + 10, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                            line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 24:
                            zone = "EW ---> Z7B";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, minTopDistance - 10);
                            line.drawLine(sourceNodeX + sourcenw + 10, minTopDistance - 10, targetNodeX - 10, minTopDistance - 10);
                            line.drawLine(targetNodeX - 10, minTopDistance - 10, targetNodeX - 10, endy);
                            line.drawLine(targetNodeX - 10, endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break;
                        case 31:
                            zone = "SN ---> Z7B";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + sourcenh + 10);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + sourcenh + 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy - 10);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy - 10, endx, endy - 10);
                            line.drawLine(endx, endy - 10, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 32:
                            zone = "SE ---> Z7B";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + sourcenh + 10);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + sourcenh + 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy, endx, endy);
                            this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                            line.paint();
                            break;
                        case 33:
                            zone = "SS ---> Z7B";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                            line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 34:
                            zone = "SW ---> Z7B";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, minLeftDistance - 10, maxBottomDistance + 10);
                            line.drawLine(minLeftDistance - 10, maxBottomDistance + 10, minLeftDistance - 10, endy);
                            line.drawLine(minLeftDistance - 10, endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break;
                        case 41:
                            zone = "WN ---> Z7B";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY - 10);
                            line.drawLine(sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY - 10, endx, targetNodeY - 10);
                            line.drawLine(endx, targetNodeY - 10, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 42:
                            zone = "WE ---> Z7B";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, (targetNodeX + targetnw) + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy, endx, endy);
                            this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                            line.paint();
                            break;
                        case 43:
                            zone = "WS ---> Z7B";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, endx, sourceNodeY + halfSourcenh);
                            line.drawLine(endx, sourceNodeY + halfSourcenh, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 44:
                            zone = "WW ---> Z7B";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY - 10);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY - 10, endx - 10, targetNodeY - 10);
                            line.drawLine(endx - 10, targetNodeY - 10, endx - 10, endy);
                            line.drawLine(endx - 10, endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break
                    }
                } else {
                    zone = "Z7B10"
                }
            }
        } else {
            if (endy >= sourceNodeY + sourcenh) {
                if ((endy <= sourceNodeY + sourcenh + 10) && (endx >= sourceNodeX)) {
                    zone = "Z5B10"
                } else {
                    if (endx <= sourceNodeX - 10) {
                        zone = "Z6";
                        switch (connectionType) {
                            case 11:
                                zone = "NN ---> Z6";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 15);
                                line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 15, endx, minTopDistance - 15);
                                line.drawLine(endx, minTopDistance - 15, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 12:
                                zone = "NE ---> Z6";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 10, targetNodeX + targetnw + 10, minTopDistance - 10);
                                line.drawLine(targetNodeX + targetnw + 10, minTopDistance - 10, targetNodeX + targetnw + 10, endy);
                                line.drawLine(targetNodeX + targetnw + 10, endy, endx, endy);
                                this.drawArrow("right");
                                line.paint();
                                break;
                            case 13:
                                zone = "NS ---> Z6";
                                line.clear();
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, sourceNodeY - 10);
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY - 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY - 10);
                                line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY - 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY + targetnh + 10);
                                line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY + targetnh + 10, endx, targetNodeY + targetnh + 10);
                                line.drawLine(endx, targetNodeY + targetnh + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 14:
                                zone = "NW ---> Z6";
                                line.clear();
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, minTopDistance - 10);
                                line.drawLine(sourceNodeX + halfSourcenw, minTopDistance - 10, targetNodeX - 10, minTopDistance - 10);
                                line.drawLine(targetNodeX - 10, minTopDistance - 10, targetNodeX - 10, endy);
                                line.drawLine(targetNodeX - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 21:
                                zone = "EN ---> Z6";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 22:
                                zone = "EE ---> Z6";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, endy);
                                line.drawLine(maxRightDistance + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 23:
                                zone = "ES ---> Z6";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, maxBottomDistance + 10);
                                line.drawLine(maxRightDistance + 10, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                                line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 24:
                                zone = "EW ---> Z6";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, endy);
                                line.drawLine(targetNodeX - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 31:
                                zone = "SN ---> Z6";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 32:
                                zone = "SE ---> Z6";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, endy);
                                line.drawLine((sourceNodeX) + halfSourcenw, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 33:
                                zone = "SS ---> Z6";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                                line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 34:
                                zone = "SW ---> Z6";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx - 10, endy);
                                line.drawLine(endx - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 41:
                                zone = "WN ---> Z6";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, endx, sourceNodeY + halfSourcenh);
                                line.drawLine(endx, sourceNodeY + halfSourcenh, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 42:
                                zone = "WE ---> Z6";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, (targetNodeX + targetnw) + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh);
                                line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy);
                                line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 43:
                                zone = "WS ---> Z6";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy + 10);
                                line.drawLine(sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy + 10, endx, endy + 10);
                                line.drawLine(endx, endy + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 44:
                                zone = "WW ---> Z6";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, endy);
                                line.drawLine(minLeftDistance - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break
                        }
                    } else {
                        zone = "Z5B";
                        switch (connectionType) {
                            case 11:
                                zone = "NN ---> Z5B";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, sourceNodeY - 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY - 10, sourceNodeX - 10, sourceNodeY - 10);
                                line.drawLine(sourceNodeX - 10, sourceNodeY - 10, sourceNodeX - 10, (sourceNodeY + sourcenh) + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX - 10, (sourceNodeY + sourcenh) + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, (sourceNodeY + sourcenh) + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx, (sourceNodeY + sourcenh) + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 12:
                                zone = "NE ---> Z5B";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 10, maxRightDistance + 10, minTopDistance - 10);
                                line.drawLine(maxRightDistance + 10, minTopDistance - 10, maxRightDistance + 10, endy);
                                line.drawLine(maxRightDistance + 10, endy, endx, endy);
                                this.drawArrow("right");
                                line.paint();
                                break;
                            case 13:
                                zone = "NS ---> Z5B";
                                line.clear();
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, sourceNodeY - 10);
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY - 10, minLeftDistance - 10, sourceNodeY - 10);
                                line.drawLine(minLeftDistance - 10, sourceNodeY - 10, minLeftDistance - 10, targetNodeY + targetnh + 10);
                                line.drawLine(minLeftDistance - 10, targetNodeY + targetnh + 10, endx, targetNodeY + targetnh + 10);
                                line.drawLine(endx, targetNodeY + targetnh + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 14:
                                zone = "NW ---> Z5B";
                                line.clear();
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, sourceNodeY - 10);
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY - 10, minLeftDistance - 10, sourceNodeY - 10);
                                line.drawLine(minLeftDistance - 10, sourceNodeY - 10, minLeftDistance - 10, endy);
                                line.drawLine(minLeftDistance - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 21:
                                zone = "EN ---> Z5B";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 22:
                                zone = "EE ---> Z5B";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, endy);
                                line.drawLine(maxRightDistance + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 23:
                                zone = "ES ---> Z5B";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, maxBottomDistance + 10);
                                line.drawLine(maxRightDistance + 10, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                                line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 24:
                                zone = "EW ---> Z5B";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, endy);
                                line.drawLine(targetNodeX - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 31:
                                zone = "SN ---> Z5B";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 32:
                                zone = "SE ---> Z5B";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, endy);
                                line.drawLine((sourceNodeX) + halfSourcenw, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 33:
                                zone = "SS ---> Z5B";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, endy + 10);
                                line.drawLine(targetNodeX - 10, endy + 10, endx, endy + 10);
                                line.drawLine(endx, endy + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 34:
                                zone = "SW ---> Z5B";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx - 10, endy);
                                line.drawLine(endx - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 41:
                                zone = "WN ---> Z5B";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 42:
                                zone = "WE ---> Z5B";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx + 10, endy);
                                line.drawLine(endx + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 43:
                                zone = "WS ---> Z5B";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, maxBottomDistance + 10);
                                line.drawLine(minLeftDistance - 10, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                                line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 44:
                                zone = "WW ---> Z5B";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, endy);
                                line.drawLine(minLeftDistance - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break
                        }
                    }
                }
            } else {
                if (endx <= sourceNodeX - 10) {
                    zone = "Z7A";
                    switch (connectionType) {
                        case 11:
                            zone = "NN ---> Z7A";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 15);
                            line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 15, endx, minTopDistance - 15);
                            line.drawLine(endx, minTopDistance - 15, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 12:
                            zone = "NE ---> Z7A";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 10, targetNodeX + targetnw + 10, minTopDistance - 10);
                            line.drawLine(targetNodeX + targetnw + 10, minTopDistance - 10, targetNodeX + targetnw + 10, endy);
                            line.drawLine(targetNodeX + targetnw + 10, endy, endx, endy);
                            this.drawArrow("right");
                            line.paint();
                            break;
                        case 13:
                            zone = "NS ---> Z7A";
                            line.clear();
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, sourceNodeY - 10);
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY - 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY - 10);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY - 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY + targetnh + 10);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY + targetnh + 10, endx, targetNodeY + targetnh + 10);
                            line.drawLine(endx, targetNodeY + targetnh + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 14:
                            zone = "NW ---> Z7A";
                            line.clear();
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, minTopDistance - 10);
                            line.drawLine(sourceNodeX + halfSourcenw, minTopDistance - 10, targetNodeX - 10, minTopDistance - 10);
                            line.drawLine(targetNodeX - 10, minTopDistance - 10, targetNodeX - 10, endy);
                            line.drawLine(targetNodeX - 10, endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break;
                        case 21:
                            zone = "EN ---> Z7A";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                            line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, minTopDistance - 10);
                            line.drawLine(maxRightDistance + 10, minTopDistance - 10, endx, minTopDistance - 10);
                            line.drawLine(endx, minTopDistance - 10, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 22:
                            zone = "EE ---> Z7A";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                            line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + sourcenh + 10);
                            line.drawLine(maxRightDistance + 10, sourceNodeY + sourcenh + 10, endx + 10, sourceNodeY + sourcenh + 10);
                            line.drawLine(endx + 10, sourceNodeY + sourcenh + 10, endx + 10, endy);
                            line.drawLine(endx + 10, endy, endx, endy);
                            this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                            line.paint();
                            break;
                        case 23:
                            zone = "ES ---> Z7A";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                            line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, maxBottomDistance + 10);
                            line.drawLine(maxRightDistance + 10, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                            line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 24:
                            zone = "EW ---> Z7A";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, maxBottomDistance + 10);
                            line.drawLine(sourceNodeX + sourcenw + 10, maxBottomDistance + 10, targetNodeX - 10, maxBottomDistance + 10);
                            line.drawLine(targetNodeX - 10, maxBottomDistance + 10, targetNodeX - 10, endy);
                            line.drawLine(targetNodeX - 10, endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break;
                        case 31:
                            zone = "SN ---> Z7A";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + sourcenh + 10);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + sourcenh + 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy - 10);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy - 10, endx, endy - 10);
                            line.drawLine(endx, endy - 10, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 32:
                            zone = "SE ---> Z7A";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + sourcenh + 10);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + sourcenh + 10, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy, endx, endy);
                            this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                            line.paint();
                            break;
                        case 33:
                            zone = "SS ---> Z7A";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                            line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 34:
                            zone = "SW ---> Z7A";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, minLeftDistance - 10, maxBottomDistance + 10);
                            line.drawLine(minLeftDistance - 10, maxBottomDistance + 10, minLeftDistance - 10, endy);
                            line.drawLine(minLeftDistance - 10, endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break;
                        case 41:
                            zone = "WN ---> Z7A";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, endx, sourceNodeY + halfSourcenh);
                            line.drawLine(endx, sourceNodeY + halfSourcenh, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 42:
                            zone = "WE ---> Z7A";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, (targetNodeX + targetnw) + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy, endx, endy);
                            this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                            line.paint();
                            break;
                        case 43:
                            zone = "WS ---> Z7A";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy + 10);
                            line.drawLine(sourceNodeX - Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), endy + 10, endx, endy + 10);
                            line.drawLine(endx, endy + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 44:
                            zone = "WW ---> Z7A";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), sourceNodeY + halfSourcenh, targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY + targetnh + 10);
                            line.drawLine(targetNodeX + targetnw + Math.floor((sourceNodeX - (targetNodeX + targetnw)) / 2), targetNodeY + targetnh + 10, endx - 10, targetNodeY + targetnh + 10);
                            line.drawLine(endx - 10, targetNodeY + targetnh + 10, endx - 10, endy);
                            line.drawLine(endx - 10, endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break
                    }
                } else {
                    zone = "Z7A10"
                }
            }
        }
    } else {
        if (endy <= (sourceNodeY + halfSourcenh)) {
            if (endy <= sourceNodeY) {
                if (endy >= sourceNodeY - 10 && endx <= sourcenw) {
                    zone = "Z1B10"
                } else {
                    if (endx <= sourceNodeX + sourcenw) {
                        zone = "Z1B";
                        switch (connectionType) {
                            case 11:
                                zone = "NN ---> Z1B";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, sourceNodeY - 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY - 10, maxRightDistance + 10, sourceNodeY - 10);
                                line.drawLine(maxRightDistance + 10, sourceNodeY - 10, maxRightDistance + 10, endy - 10);
                                line.drawLine(maxRightDistance + 10, endy - 10, endx, endy - 10);
                                line.drawLine(endx, endy - 10, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 12:
                                zone = "NE ---> Z1B";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine((sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), endx + 15, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine(endx + 15, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), endx + 15, endy);
                                line.drawLine(endx + 15, endy, endx, endy);
                                this.drawArrow("right");
                                line.paint();
                                break;
                            case 13:
                                zone = "NS ---> Z1B";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine((sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), endx, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine(endx, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 14:
                                zone = "NW ---> Z1B";
                                line.clear();
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, endy);
                                line.drawLine(sourceNodeX + halfSourcenw, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 21:
                                zone = "EN ---> Z1B";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, minTopDistance - 10);
                                line.drawLine(maxRightDistance + 10, minTopDistance - 10, endx, minTopDistance - 10);
                                line.drawLine(endx, minTopDistance - 10, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 22:
                                zone = "EE ---> Z1B";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, endy);
                                line.drawLine(maxRightDistance + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 23:
                                zone = "ES ---> Z1B";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(sourceNodeX + sourcenw + 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(endx, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 24:
                                zone = "EW ---> Z1B";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, endy);
                                line.drawLine(targetNodeX - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 31:
                                zone = "SN ---> Z1B";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, maxRightDistance + 10, sourceNodeY + sourcenh + 10);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + sourcenh + 10, maxRightDistance + 10, minTopDistance - 10);
                                line.drawLine(maxRightDistance + 10, minTopDistance - 10, endx, minTopDistance - 10);
                                line.drawLine(endx, minTopDistance - 10, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 32:
                                zone = "SE ---> Z1B";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, maxRightDistance + 10, maxBottomDistance + 10);
                                line.drawLine(maxRightDistance + 10, maxBottomDistance + 10, maxRightDistance + 10, endy);
                                line.drawLine(maxRightDistance + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 33:
                                zone = "SS ---> Z1B";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + 10);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + 10, targetNodeY + targetnh + 10);
                                line.drawLine(sourceNodeX + sourcenw + 10, targetNodeY + targetnh + 10, endx, targetNodeY + targetnh + 10);
                                line.drawLine(endx, targetNodeY + targetnh + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 34:
                                zone = "SW ---> Z1B";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, minLeftDistance - 10, maxBottomDistance + 10);
                                line.drawLine(minLeftDistance - 10, maxBottomDistance + 10, minLeftDistance - 10, endy);
                                line.drawLine(minLeftDistance - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 41:
                                zone = "WN ---> Z1B";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, minTopDistance - 10);
                                line.drawLine(minLeftDistance - 10, minTopDistance - 10, endx, minTopDistance - 10);
                                line.drawLine(endx, minTopDistance - 10, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 42:
                                zone = "WE ---> Z1B";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(sourceNodeX - 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx + 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(endx + 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx + 10, endy);
                                line.drawLine(endx + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 43:
                                zone = "WS ---> Z1B";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(sourceNodeX - 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(endx, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 44:
                                zone = "WW ---> Z1B";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, endy);
                                line.drawLine(minLeftDistance - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break
                        }
                    } else {
                        zone = "Z2";
                        switch (connectionType) {
                            case 11:
                                zone = "NN ---> Z2";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 15);
                                line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 15, endx, minTopDistance - 15);
                                line.drawLine(endx, minTopDistance - 15, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 12:
                                zone = "NE ---> Z2";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine((sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), endx + 15, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine(endx + 15, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), endx + 15, endy);
                                line.drawLine(endx + 15, endy, endx, endy);
                                this.drawArrow("right");
                                line.paint();
                                break;
                            case 13:
                                zone = "NS ---> Z2";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine((sourceNodeX) + halfSourcenw, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), endx, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)));
                                line.drawLine(endx, (sourceNodeY - Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2)), endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 14:
                                zone = "NW ---> Z2";
                                line.clear();
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, endy);
                                line.drawLine(sourceNodeX + halfSourcenw, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 21:
                                zone = "EN ---> Z2";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), minTopDistance - 10);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), minTopDistance - 10, endx, minTopDistance - 10);
                                line.drawLine(endx, minTopDistance - 10, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 22:
                                zone = "EE ---> Z2";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, endy);
                                line.drawLine(maxRightDistance + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 23:
                                zone = "ES ---> Z2";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, endx, sourceNodeY + halfSourcenh);
                                line.drawLine(endx, sourceNodeY + halfSourcenh, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 24:
                                zone = "EW ---> Z2";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 31:
                                zone = "SN ---> Z2";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY - 10);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY - 10, endx, targetNodeY - 10);
                                line.drawLine(endx, targetNodeY - 10, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 32:
                                zone = "SE ---> Z2";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, maxRightDistance + 10, maxBottomDistance + 10);
                                line.drawLine(maxRightDistance + 10, maxBottomDistance + 10, maxRightDistance + 10, endy);
                                line.drawLine(maxRightDistance + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 33:
                                zone = "SS ---> Z2";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                                line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 34:
                                zone = "SW ---> Z2";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 41:
                                zone = "WN ---> Z2";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, minTopDistance - 10);
                                line.drawLine(minLeftDistance - 10, minTopDistance - 10, endx, minTopDistance - 10);
                                line.drawLine(endx, minTopDistance - 10, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 42:
                                zone = "WE ---> Z2";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(sourceNodeX - 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx + 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(endx + 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx + 10, endy);
                                line.drawLine(endx + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 43:
                                zone = "WS ---> Z2";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(sourceNodeX - 10, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2));
                                line.drawLine(endx, targetNodeY + targetnh + Math.floor((sourceNodeY - (targetNodeY + targetnh)) / 2), endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 44:
                                zone = "WW ---> Z2";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, endy);
                                line.drawLine(minLeftDistance - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break
                        }
                    }
                }
            } else {
                if (endx <= sourceNodeX + sourcenw + 10) {
                    zone = "Z3A10"
                } else {
                    zone = "Z3A";
                    switch (connectionType) {
                        case 11:
                            zone = "NN ---> Z3A";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 15);
                            line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 15, endx, minTopDistance - 15);
                            line.drawLine(endx, minTopDistance - 15, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 12:
                            zone = "NE ---> Z3A";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 10, targetNodeX + targetnw + 10, minTopDistance - 10);
                            line.drawLine(targetNodeX + targetnw + 10, minTopDistance - 10, targetNodeX + targetnw + 10, endy);
                            line.drawLine(targetNodeX + targetnw + 10, endy, endx, endy);
                            this.drawArrow("right");
                            line.paint();
                            break;
                        case 13:
                            zone = "NS ---> Z3A";
                            line.clear();
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, sourceNodeY - 10);
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY - 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY + targetnh + 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY + targetnh + 10, endx, targetNodeY + targetnh + 10);
                            line.drawLine(endx, targetNodeY + targetnh + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 14:
                            zone = "NW ---> Z3A";
                            line.clear();
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, sourceNodeY - 10);
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY - 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break;
                        case 21:
                            zone = "EN ---> Z3A";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), minTopDistance - 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), minTopDistance - 10, endx, minTopDistance - 10);
                            line.drawLine(endx, minTopDistance - 10, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 22:
                            zone = "EE ---> Z3A";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY - 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY - 10, endx + 10, targetNodeY - 10);
                            line.drawLine(endx + 10, targetNodeY - 10, endx + 10, endy);
                            line.drawLine(endx + 10, endy, endx, endy);
                            this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                            line.paint();
                            break;
                        case 23:
                            zone = "ES ---> Z3A";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, endx, sourceNodeY + halfSourcenh);
                            line.drawLine(endx, sourceNodeY + halfSourcenh, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 24:
                            zone = "EW ---> Z3A";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break;
                        case 31:
                            zone = "SN ---> Z3A";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY - 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY - 10, endx, targetNodeY - 10);
                            line.drawLine(endx, targetNodeY - 10, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 32:
                            zone = "SE ---> Z3A";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, maxRightDistance + 10, maxBottomDistance + 10);
                            line.drawLine(maxRightDistance + 10, maxBottomDistance + 10, maxRightDistance + 10, endy);
                            line.drawLine(maxRightDistance + 10, endy, endx, endy);
                            this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                            line.paint();
                            break;
                        case 33:
                            zone = "SS ---> Z3A";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                            line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 34:
                            zone = "SW ---> Z3A";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break;
                        case 41:
                            zone = "WN ---> Z3A";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                            line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, minTopDistance - 10);
                            line.drawLine(minLeftDistance - 10, minTopDistance - 10, endx, minTopDistance - 10);
                            line.drawLine(endx, minTopDistance - 10, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 42:
                            zone = "WE ---> Z3A";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, minTopDistance - 10);
                            line.drawLine(sourceNodeX - 10, minTopDistance - 10, maxRightDistance + 10, minTopDistance - 10);
                            line.drawLine(maxRightDistance + 10, minTopDistance - 10, maxRightDistance + 10, endy);
                            line.drawLine(maxRightDistance + 10, endy, endx, endy);
                            this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                            line.paint();
                            break;
                        case 43:
                            zone = "WS ---> Z3A";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                            line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, maxBottomDistance + 10);
                            line.drawLine(minLeftDistance - 10, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                            line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 44:
                            zone = "WW ---> Z3A";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY - 10);
                            line.drawLine(sourceNodeX - 10, sourceNodeY - 10, targetNodeX - Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10);
                            line.drawLine(targetNodeX - Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10, targetNodeX - Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy);
                            line.drawLine(targetNodeX - Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break
                    }
                }
            }
        } else {
            if (endy >= sourceNodeY + sourcenh) {
                if ((endy <= sourceNodeY + sourcenh + 10) && (endx <= sourceNodeX + sourcenw)) {
                    zone = "Z5A10"
                } else {
                    if (endx <= sourceNodeX + sourcenw) {
                        zone = "Z5A";
                        switch (connectionType) {
                            case 11:
                                zone = "NN ---> Z5A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, sourceNodeY - 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY - 10, sourceNodeX + sourcenw + 10, sourceNodeY - 10);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY - 10, sourceNodeX + sourcenw + 10, (sourceNodeY + sourcenh) + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX + sourcenw + 10, (sourceNodeY + sourcenh) + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, (sourceNodeY + sourcenh) + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx, (sourceNodeY + sourcenh) + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 12:
                                zone = "NE ---> Z5A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 10, maxRightDistance + 10, minTopDistance - 10);
                                line.drawLine(maxRightDistance + 10, minTopDistance - 10, maxRightDistance + 10, endy);
                                line.drawLine(maxRightDistance + 10, endy, endx, endy);
                                this.drawArrow("right");
                                line.paint();
                                break;
                            case 13:
                                zone = "NS ---> Z5A";
                                line.clear();
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, sourceNodeY - 10);
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY - 10, maxRightDistance + 10, sourceNodeY - 10);
                                line.drawLine(maxRightDistance + 10, sourceNodeY - 10, maxRightDistance + 10, targetNodeY + targetnh + 10);
                                line.drawLine(maxRightDistance + 10, targetNodeY + targetnh + 10, endx, targetNodeY + targetnh + 10);
                                line.drawLine(endx, targetNodeY + targetnh + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 14:
                                zone = "NW ---> Z5A";
                                line.clear();
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, sourceNodeY - 10);
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY - 10, minLeftDistance - 10, sourceNodeY - 10);
                                line.drawLine(minLeftDistance - 10, sourceNodeY - 10, minLeftDistance - 10, endy);
                                line.drawLine(minLeftDistance - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 21:
                                zone = "EN ---> Z5A";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 22:
                                zone = "EE ---> Z5A";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, endy);
                                line.drawLine(maxRightDistance + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 23:
                                zone = "ES ---> Z5A";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, maxBottomDistance + 10);
                                line.drawLine(maxRightDistance + 10, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                                line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 24:
                                zone = "EW ---> Z5A";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX + sourcenw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(targetNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX - 10, endy);
                                line.drawLine(targetNodeX - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 31:
                                zone = "SN ---> Z5A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 32:
                                zone = "SE ---> Z5A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx + 10, endy);
                                line.drawLine(endx + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 33:
                                zone = "SS ---> Z5A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX + targetnw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(targetNodeX + targetnw + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), targetNodeX + targetnw + 10, endy + 10);
                                line.drawLine(targetNodeX + targetnw + 10, endy + 10, endx, endy + 10);
                                line.drawLine(endx, endy + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 34:
                                zone = "SW ---> Z5A";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, endy);
                                line.drawLine((sourceNodeX) + halfSourcenw, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 41:
                                zone = "WN ---> Z5A";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 42:
                                zone = "WE ---> Z5A";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx + 10, endy);
                                line.drawLine(endx + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 43:
                                zone = "WS ---> Z5A";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, maxBottomDistance + 10);
                                line.drawLine(minLeftDistance - 10, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                                line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 44:
                                zone = "WW ---> Z5A";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, endy);
                                line.drawLine(minLeftDistance - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break
                        }
                    } else {
                        zone = "Z4";
                        switch (connectionType) {
                            case 11:
                                zone = "NN ---> Z4";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 15);
                                line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 15, endx, minTopDistance - 15);
                                line.drawLine(endx, minTopDistance - 15, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 12:
                                zone = "NE ---> Z4";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 10, targetNodeX + targetnw + 10, minTopDistance - 10);
                                line.drawLine(targetNodeX + targetnw + 10, minTopDistance - 10, targetNodeX + targetnw + 10, endy);
                                line.drawLine(targetNodeX + targetnw + 10, endy, endx, endy);
                                this.drawArrow("right");
                                line.paint();
                                break;
                            case 13:
                                zone = "NS ---> Z4";
                                line.clear();
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, sourceNodeY - 10);
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY - 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY + targetnh + 10);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY + targetnh + 10, endx, targetNodeY + targetnh + 10);
                                line.drawLine(endx, targetNodeY + targetnh + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 14:
                                zone = "NW ---> Z4";
                                line.clear();
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, sourceNodeY - 10);
                                line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY - 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 21:
                                zone = "EN ---> Z4";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, endx, sourceNodeY + halfSourcenh);
                                line.drawLine(endx, sourceNodeY + halfSourcenh, endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 22:
                                zone = "EE ---> Z4";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, maxRightDistance + 10, sourceNodeY + halfSourcenh);
                                line.drawLine(maxRightDistance + 10, sourceNodeY + halfSourcenh, maxRightDistance + 10, endy);
                                line.drawLine(maxRightDistance + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 23:
                                zone = "ES ---> Z4";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy + 10);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy + 10, endx, endy + 10);
                                line.drawLine(endx, endy + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 24:
                                zone = "EW ---> Z4";
                                line.clear();
                                line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy);
                                line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 31:
                                zone = "SN ---> Z4";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 32:
                                zone = "SE ---> Z4";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx + 10, endy);
                                line.drawLine(endx + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 33:
                                zone = "SS ---> Z4";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                                line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                                line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 34:
                                zone = "SW ---> Z4";
                                line.clear();
                                line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, endy);
                                line.drawLine((sourceNodeX) + halfSourcenw, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break;
                            case 41:
                                zone = "WN ---> Z4";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx, endy);
                                this.drawArrow("down");
                                line.paint();
                                break;
                            case 42:
                                zone = "WE ---> Z4";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(sourceNodeX - 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2));
                                line.drawLine(endx + 10, sourceNodeY + sourcenh + Math.floor((targetNodeY - (sourceNodeY + sourcenh)) / 2), endx + 10, endy);
                                line.drawLine(endx + 10, endy, endx, endy);
                                this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                                line.paint();
                                break;
                            case 43:
                                zone = "WS ---> Z4";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, maxBottomDistance + 10);
                                line.drawLine(minLeftDistance - 10, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                                line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                                this.drawArrow("up");
                                line.paint();
                                break;
                            case 44:
                                zone = "WW ---> Z4";
                                line.clear();
                                line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                                line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, endy);
                                line.drawLine(minLeftDistance - 10, endy, endx, endy);
                                this.drawArrow("left");
                                line.paint();
                                break
                        }
                    }
                }
            } else {
                if (endx <= sourceNodeX + sourcenw + 10) {
                    zone = "Z3B10"
                } else {
                    zone = "Z3B";
                    switch (connectionType) {
                        case 11:
                            zone = "NN ---> Z3B";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 15);
                            line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 15, endx, minTopDistance - 15);
                            line.drawLine(endx, minTopDistance - 15, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 12:
                            zone = "NE ---> Z3B";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY, (sourceNodeX) + halfSourcenw, minTopDistance - 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, minTopDistance - 10, targetNodeX + targetnw + 10, minTopDistance - 10);
                            line.drawLine(targetNodeX + targetnw + 10, minTopDistance - 10, targetNodeX + targetnw + 10, endy);
                            line.drawLine(targetNodeX + targetnw + 10, endy, endx, endy);
                            this.drawArrow("right");
                            line.paint();
                            break;
                        case 13:
                            zone = "NS ---> Z3B";
                            line.clear();
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, sourceNodeY - 10);
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY - 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY + targetnh + 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY + targetnh + 10, endx, targetNodeY + targetnh + 10);
                            line.drawLine(endx, targetNodeY + targetnh + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 14:
                            zone = "NW ---> Z3B";
                            line.clear();
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY, sourceNodeX + halfSourcenw, sourceNodeY - 10);
                            line.drawLine(sourceNodeX + halfSourcenw, sourceNodeY - 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY - 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break;
                        case 21:
                            zone = "EN ---> Z3B";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, endx, sourceNodeY + halfSourcenh);
                            line.drawLine(endx, sourceNodeY + halfSourcenh, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 22:
                            zone = "EE ---> Z3B";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY + targetnh + 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY + targetnh + 10, endx + 10, targetNodeY + targetnh + 10);
                            line.drawLine(endx + 10, targetNodeY + targetnh + 10, endx + 10, endy);
                            line.drawLine(endx + 10, endy, endx, endy);
                            this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                            line.paint();
                            break;
                        case 23:
                            zone = "ES ---> Z3B";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy + 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy + 10, endx, endy + 10);
                            line.drawLine(endx, endy + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 24:
                            zone = "EW ---> Z3B";
                            line.clear();
                            line.drawLine(sourceNodeX + sourcenw, sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + halfSourcenh, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break;
                        case 31:
                            zone = "SN ---> Z3B";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY - 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), targetNodeY - 10, endx, targetNodeY - 10);
                            line.drawLine(endx, targetNodeY - 10, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 32:
                            zone = "SE ---> Z3B";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, maxRightDistance + 10, maxBottomDistance + 10);
                            line.drawLine(maxRightDistance + 10, maxBottomDistance + 10, maxRightDistance + 10, endy);
                            line.drawLine(maxRightDistance + 10, endy, endx, endy);
                            this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                            line.paint();
                            break;
                        case 33:
                            zone = "SS ---> Z3B";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, maxBottomDistance + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                            line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 34:
                            zone = "SW ---> Z3B";
                            line.clear();
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh, (sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10);
                            line.drawLine((sourceNodeX) + halfSourcenw, sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10, sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy);
                            line.drawLine(sourceNodeX + sourcenw + Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break;
                        case 41:
                            zone = "WN ---> Z3B";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                            line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, minTopDistance - 10);
                            line.drawLine(minLeftDistance - 10, minTopDistance - 10, endx, minTopDistance - 10);
                            line.drawLine(endx, minTopDistance - 10, endx, endy);
                            this.drawArrow("down");
                            line.paint();
                            break;
                        case 42:
                            zone = "WE ---> Z3B";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, maxBottomDistance + 10);
                            line.drawLine(sourceNodeX - 10, maxBottomDistance + 10, maxRightDistance + 10, maxBottomDistance + 10);
                            line.drawLine(maxRightDistance + 10, maxBottomDistance + 10, maxRightDistance + 10, endy);
                            line.drawLine(maxRightDistance + 10, endy, endx, endy);
                            this.drawArrow(new Array(endx + 5, endx + 5, endx), new Array(endy - 5, endy + 5, endy));
                            line.paint();
                            break;
                        case 43:
                            zone = "WS ---> Z3B";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, minLeftDistance - 10, sourceNodeY + halfSourcenh);
                            line.drawLine(minLeftDistance - 10, sourceNodeY + halfSourcenh, minLeftDistance - 10, maxBottomDistance + 10);
                            line.drawLine(minLeftDistance - 10, maxBottomDistance + 10, endx, maxBottomDistance + 10);
                            line.drawLine(endx, maxBottomDistance + 10, endx, endy);
                            this.drawArrow("up");
                            line.paint();
                            break;
                        case 44:
                            zone = "WW ---> Z3B";
                            line.clear();
                            line.drawLine(sourceNodeX, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + halfSourcenh);
                            line.drawLine(sourceNodeX - 10, sourceNodeY + halfSourcenh, sourceNodeX - 10, sourceNodeY + sourcenh + 10);
                            line.drawLine(sourceNodeX - 10, sourceNodeY + sourcenh + 10, targetNodeX - Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10);
                            line.drawLine(targetNodeX - Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), sourceNodeY + sourcenh + 10, targetNodeX - Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy);
                            line.drawLine(targetNodeX - Math.floor((targetNodeX - (sourceNodeX + sourcenw)) / 2), endy, endx, endy);
                            this.drawArrow("left");
                            line.paint();
                            break
                    }
                }
            }
        }
    }
}