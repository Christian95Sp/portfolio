const range = num => [...Array(num).keys()];

const key = ({ row, col }) => `${row}${col}`;
const cssUrl = id => `url(#${id})`;

const RED = 'red';
const BLACK = 'black';

const BoardChecker = Vue.component('board-checker', {
    template: '#board-checker-template',
    props: ['checker', 'cellSize', 'rowCount', 'checkerRadius'],

    data() {
        return {
            colorHexes: {
                red: '#FC7E69',
                black: '#254689',
            },
        };
    },

    computed: {
        row() { return this.checker.row; },
        col() { return this.checker.col; },
        color() { return this.checker.color; },

        adjustedColor() {
            return this.colorHexes[this.color];
        },

        centerX() {
            return (this.cellSize / 2);
        },

        centerY() {
            return (this.cellSize / 2) + (this.cellSize * (this.rowCount - 1 - this.row));
        },
    },
});

const BoardColumn = Vue.component('board-column', {
    template: '#board-column-template',
    props: ['checkers', 'col', 'color', 'cellSize', 'boardHeight', 'checkerRadius', 'rowCount', 'mask'],

    components: {
        BoardChecker,
    },

    computed: {
        // Find the current max occupied row and add 1
        nextOpenRow() {
            return Math.max(...this.checkers.map(c => c.row).concat(-1)) + 1;
        },
    },

    methods: {
        key,

        drop() {
            const col = this.col;
            const row = this.nextOpenRow;

            if (row < this.rowCount) {
                console.log('dropping', { row, col });
                this.$emit('drop', { row, col });
            } else {
                console.log('cannot drop', { row, col });
            }
        },
    },
});

const GameBoard = Vue.component('game-board', {
    template: '#game-board-template',
    props: ['checkers', 'rowCount', 'colCount'],
    components: {
        BoardColumn,
    },

    data() {
        return {
            patternId: 'cell-pattern',
            maskId: 'cell-mask',
            cellSize: 100,
        };
    },

    computed: {
        pattern() { return cssUrl(this.patternId); },
        mask() { return cssUrl(this.maskId); },

        rows() { return range(this.rowCount); },
        cols() { return range(this.colCount); },

        boardWidth() { return this.colCount * this.cellSize; },
        boardHeight() { return this.rowCount * this.cellSize; },
        checkerRadius() { return this.cellSize * 0.45; },
    },

    methods: {
        checkerStack(col) {
            return Object.values(this.checkers).filter(c => c.col === col)
                .sort((a, b) => a.row - b.row);
        },
        drop(data) {
            this.$emit('drop', data);
        }
    },
});

const GameContainer = Vue.component('game-container', {
    template: "#game-container-template",

    components: {
        GameBoard,
    },

    data() {
        return {
            checkers: {},
            playerColor: RED,
            rowCount: 6,
            colCount: 7,
        };
    },

    methods: {
        key,

        toggleColor() {
            if (this.playerColor === RED) {
                this.playerColor = BLACK;
            } else {
                this.playerColor = RED;
            }
        },

        drop({ col, row }) {
            const color = this.playerColor;

            console.log('setting checker', key({ row, col }), { row, col, color });
            Vue.set(this.checkers, key({ row, col }), { row, col, color });
            this.toggleColor();
        },
    },
});

new Vue({
    el: '#app',
});