let main = {

    variables: {
        turn: 'w',
        selectedpiece: '',
        highlighted: [],
        pieces: {
            w_king: {
                position: '5_1',
                img: '&#9812;',
                captured: false,
                moved: false,
                type: 'w_king'
            },
            w_queen: {
                position: '4_1',
                img: '&#9813;',
                captured: false,
                moved: false,
                type: 'w_queen'
            },
            w_bishop1: {
                position: '3_1',
                img: '&#9815;',
                captured: false,
                moved: false,
                type: 'w_bishop'
            },
            w_bishop2: {
                position: '6_1',
                img: '&#9815;',
                captured: false,
                moved: false,
                type: 'w_bishop'
            },
            w_knight1: {
                position: '2_1',
                img: '&#9816;',
                captured: false,
                moved: false,
                type: 'w_knight'
            },
            w_knight2: {
                position: '7_1',
                img: '&#9812;',
                captured: false,
                moved: false,
                type: 'w_knight'
            },
            w_rook1: {
                position: '1_1',
                img: '&#9814;',
                captured: false,
                moved: false,
                type: 'w_rook'
            },
            w_rook2: {
                position: '8_1',
                img: '&#9814;',
                captured: false,
                moved: false,
                type: 'w_rook'
            },
            w_pawn1: {
                position: '1_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'w_pawn'
            },
            w_pawn2: {
                position: '2_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'w_pawn'
            },
            w_pawn3: {
                position: '3_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'w_pawn'
            },
            w_pawn4: {
                position: '4_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'w_pawn'
            },
            w_pawn5: {
                position: '5_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'w_pawn'
            },
            w_pawn6: {
                position: '6_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'w_pawn'
            },
            w_pawn7: {
                position: '7_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'w_pawn'
            },
            w_pawn8: {
                position: '8_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'w_pawn'
            },

            b_king: {
                position: '5_8',
                img: '&#9818;',
                captured: false,
                moved: false,
                type: 'b_king'
            },
            b_queen: {
                position: '4_8',
                img: '&#9819;',
                captured: false,
                moved: false,
                type: 'b_queen'
            },
            b_bishop1: {
                position: '3_8',
                img: '&#9821;',
                captured: false,
                moved: false,
                type: 'b_bishop'
            },
            b_bishop2: {
                position: '6_8',
                img: '&#9821;',
                captured: false,
                moved: false,
                type: 'b_bishop'
            },
            b_knight1: {
                position: '2_8',
                img: '&#9822;',
                captured: false,
                moved: false,
                type: 'b_knight'
            },
            b_knight2: {
                position: '7_8',
                img: '&#9822;',
                captured: false,
                moved: false,
                type: 'b_knight'
            },
            b_rook1: {
                position: '1_8',
                img: '&#9820;',
                captured: false,
                moved: false,
                type: 'b_rook'
            },
            b_rook2: {
                position: '8_8',
                img: '&#9820;',
                captured: false,
                moved: false,
                type: 'b_rook'
            },
            b_pawn1: {
                position: '1_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'b_pawn'
            },
            b_pawn2: {
                position: '2_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'b_pawn'
            },
            b_pawn3: {
                position: '3_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'b_pawn'
            },
            b_pawn4: {
                position: '4_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'b_pawn'
            },
            b_pawn5: {
                position: '5_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'b_pawn'
            },
            b_pawn6: {
                position: '6_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'b_pawn'
            },
            b_pawn7: {
                position: '7_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'b_pawn'
            },
            b_pawn8: {
                position: '8_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'b_pawn'
            }
        }
    },

    methods: {
        gameSetup: function() {
            $('.gamecell').attr('chess', 'null');
            for (let gamepiece in main.variables.pieces) {
                $('#' + main.variables.pieces[gamepiece].position).html(main.variables.pieces[gamepiece].img);
                $('#' + main.variables.pieces[gamepiece].position).attr('chess', gamepiece)
            }
        },

        moveOptions: function(selecedpiece) {
            let position = { x: '', y: '' };
            position.x = main.variables.pieces[selecedpiece].position.split('_')[0];
            position.y = main.variables.pieces[selecedpiece].position.split('_')[1];

            var options = [];
            var coordinates = [];
            var startpoint = main.variables.pieces[selecedpiece].position;
            var c1,c2,c3,c4,c5,c6,c7,c8;

            if (main.variables.highlighted.length != 0) {
                main.methods.toggleHighlight(main.variables.highlighted);
            }

            switch (main.variables.pieces[selecedpiece].type) {
                case 'w_king':
                    if ($('#6_1').attr('chess') == 'null' && $('#7_1').attr('chess') == 'null' && main.variables.pieces['w_king'].moved == false && main.variables.pieces['w_rook2'].moved == false) {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 2, y: 0}].map(function(val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    } else {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }].map(function(val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }

                    options = (main.methods.options(startpoint ,coordinates, main.variables.pieces[selecedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.toggleHighlight(options);

                    break;
                case 'b_king':
                    if ($('#6_8').attr('chess') == 'null' && $('#7_8').attr('chess') == 'null' && main.variables.pieces['b_king'].moved == false && main.variables.pieces['b_rook2'].moved == false) {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 2, y: 0}].map(function(val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    } else {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }].map(function(val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }

                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selecedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.toggleHighlight(options);

                    break;
                case 'w_queen':
                    c1 = main.methods.w_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    c2 = main.methods.w_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    c3 = main.methods.w_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    c4 = main.methods.w_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
                    c5 = main.methods.w_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    c6 = main.methods.w_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    c7 = main.methods.w_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    c8 = main.methods.w_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.toggleHighlight(options);

                    break;
                case 'b_queen':
                    c1 = main.methods.b_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    c2 = main.methods.b_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    c3 = main.methods.b_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    c4 = main.methods.b_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
                    c5 = main.methods.b_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    c6 = main.methods.b_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    c7 = main.methods.b_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    c8 = main.methods.b_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.toggleHighlight(options);

                    break;
            }
        },

        options: function(startopint, coordinates, piecetype) {

        },

        w_options: function(position, coordinates) {

        },

        b_options: function(position, coordinates) {

        },

        capture: function(target) {

        },

        move: function(target) {

        },

        endturn: function() {

        },

        toggleHighlight: function(options) {

        }
    }
};

$(document).ready(function() {
    main.methods.gameSetup();

    $('.gamecell').click(function(e) {
        var selectedpiece = {
            name: '',
            id: main.variables.selectedpiece
        };

        if (main.variables.selectedpiece == '') {
            selectedpiece.name = $('#' + e.target.id).attr('chess');
        } else {
            selectedpiece.name = $('#' + main.variables.selectedpiece).attr('chess');
        }

        var target = {
            name: $(this).attr('chess'),
            id: e.target.id
        };

        if (main.variables.selectedpiece == '' && target.name.slice(0, 1) == main.variables.turn) {
            main.variables.selectedpiece = e.target.id;
            main.methods.moveOptions($(this).attr('chess'));
        } else if (main.variables.selectedpiece != '' && target.name == 'null') {
            if (selectedpiece.name == 'w_king' || selectedpiece.name == 'b_king') {
                let t0 = (selectedpiece.name = 'w_king');
                let t1 = (selectedpiece.name = 'b_king');
                let t2 = (main.variables.pieces[selectedpiece.name].moved == false);
                let t3 = (main.variables.pieces['b_rook2'].moved == false);
                let t4 = (main.variables.pieces['w_rook2'].moved == false);
                let t5 = (target.id == '7_8');
                let t6 = (target.id == '7_1');

                if (t0 && t2 && t4 && t6) {
                    let k_position = '5_1';
                    let k_target = '7_1';
                    let r_position = '8_1';
                    let r_target = '6_1';

                    main.variables.pieces['w_king'].position = k_target;
                    main.variables.pieces['w_king'].moved = true;
                    $('#' + k_position).html('');
                    $('#' + k_position).attr('chess', 'null');
                    $('#' + k_target).html(main.variables.pieces['w_king'].img);
                    $('#' + k_target).attr('chess', 'w_king');

                    main.variables.pieces['w_rook2'].position = r_target;
                    main.variables.pieces['w_rook2'].moved = true;
                    $('#' + r_position).html('');
                    $('#' + r_position).attr('chess', 'null');
                    $('#' + r_target).html(main.variables.pieces['w_rook2'].img);
                    $('#' + r_target).attr('chess', 'w_rook2');

                    main.methods.endturn();
                } else if (t1 && t2 && t3 && t5) {
                    let k_position = '5_8';
                    let k_target = '7_8';
                    let r_position = '8_8';
                    let r_target = '6_8';

                    main.variables.pieces['b_king'].position = k_target;
                    main.variables.pieces['b_king'].moved = true;
                    $('#' + k_position).html('');
                    $('#' + k_position).attr('chess', 'null');
                    $('#' + k_target).html(main.variables.pieces['b_king'].img);
                    $('#' + k_target).attr('chess', 'b_king');

                    main.variables.pieces['b_rook2'].position = r_target;
                    main.variables.pieces['b_rook2'].moved = true;
                    $('#' + r_position).html('');
                    $('#' + r_position).attr('chess', 'null');
                    $('#' + r_target).html(main.variables.pieces['b_rook2'].img);
                    $('#' + r_target).attr('chess', 'b_rook2');

                    main.methods.endturn();
                } else {
                    main.methods.move(target);
                    main.methods.endturn();
                }
            } else {
                main.methods.move(target);
                main.methods.endturn();
            }
        } else if (main.variables.selectedpiece != '' && target.name != 'null' && target.id != selectedpiece.id && selectedpiece.name.slice(0, 1) != target.name.slice(0, 1)) {
            if (selectedpiece.id != target.id && main.variables.highlighted.indexOf(target.id) != (-1)) {
                main.methods.capture(target);
                main.methods.endturn();
            }
        } else if (main.variables.selectedpiece != '' && target.name != 'null' && target.id != selectedpiece.id && selectedpiece.name.slice(0, 1) == target.name.slice(0, 1)) {
            main.methods.toggleHighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;

            main.variables.selectedpiece = target.id;
            main.methods.moveOptions(target.name);
        }
    });

    $('body').contextmenu(function(e) {
        e.preventDefault();
    });
})