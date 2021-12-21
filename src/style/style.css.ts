import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
    vars: {
        '--cursor': 'pointer',
        '--background': 'blue'
    },
    padding: '0.8rem 1rem 0.7rem',
    border: '0.2rem solid #4d4d4d',
    cursor: 'var(--pointer)',
    textTransform: 'capitalize',
});

export const buttonToggle = style({
    borderWidth: '1px',
    borderColor: '#d3d3d3'
});

export const buttonPrimary = style({
    color: '#fff',
    backgroundColor: '#000'
});

export const buttonAdd = style([ buttonPrimary, buttonStyle]);