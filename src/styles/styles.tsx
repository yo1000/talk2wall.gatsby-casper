export const styles = {
    border: (colorScheme: any, width: number) => {
        const radius: number = Math.floor(width / 3);
        return `
            border-radius: ${radius}px;
            border-left: ${width}px groove ${colorScheme.left};
            border-top: ${width}px groove ${colorScheme.top}; 
            border-right: ${width}px ridge ${colorScheme.right}; 
            border-bottom: ${width}px ridge ${colorScheme.bottom};
        `;
    },
    background: (colorScheme: any) => {
        return `
            background: ${colorScheme.color} center center;
        `;
    },
    foreground: (colorScheme: any, pos: string) => {
        return `
            color: ${colorScheme.color};
            text-shadow: ${colorScheme.shadow} ${pos} ${pos};
        `;
    },
};
