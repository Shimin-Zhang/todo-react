import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
    vars: {
        '--background': 'blue'
    },
    display: 'flex',
    background: 'var(--background)',
    ':hover': {
        background: 'green'
    }
});