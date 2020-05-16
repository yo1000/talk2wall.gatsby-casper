import { colors } from '../styles/colors';

export const styles = {
    balloon: `
        border-radius: 2px;
        background: linear-gradient(to right, ${colors.ff8BallonBackgroundLeft}, ${colors.ff8BallonBackgroundRight});
        border-left: 6px groove ${colors.ff8BallonBorderInLeft};
        border-top: 6px groove ${colors.ff8BallonBorderInTop};
        border-right: 6px ridge ${colors.ff8BallonBorderInRight};
        border-bottom: 6px ridge ${colors.ff8BallonBorderInBottom};
          `,
    balloonBorder: `
        border-radius: 2px;
        border-left: 6px groove ${colors.ff8BallonBorderInLeft};
        border-top: 6px groove ${colors.ff8BallonBorderInTop};
        border-right: 6px ridge ${colors.ff8BallonBorderInRight};
        border-bottom: 6px ridge ${colors.ff8BallonBorderInBottom};
        `,
    balloonTranslucent: `
        border-radius: 2px;
        background: linear-gradient(to right, ${colors.ff8BallonTranslucentBackgroundLeft}, ${colors.ff8BallonTranslucentBackgroundRight});
        border-left: 4px groove ${colors.ff8BallonBorderInLeft};
        border-top: 4px groove ${colors.ff8BallonBorderInTop}; 
        border-right: 4px ridge ${colors.ff8BallonBorderInRight}; 
        border-bottom: 4px ridge ${colors.ff8BallonBorderInBottom};
    `,
    balloonTitle: function(pos: string) {
        return `
            color: ${colors.balloonTitle};
            text-shadow: ${colors.balloonTitleShadow} ${pos} ${pos};
        `;
    },
    balloonText: function(pos: string) {
        return `
            color: ${colors.balloonText};
            text-shadow: ${colors.balloonTextShadow} ${pos} ${pos};
        `;
    },
};
