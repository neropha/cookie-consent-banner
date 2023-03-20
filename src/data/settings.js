export const settings = {
    categories: {
        essential: {
            headline: "Notwendige Cookie",
            description: "Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum.",
            checked: true,
            disabled: true
        },
        functional: {
            headline: "Funktionale Cookies",
            description: "Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum.",
            checked: false,
            disabled: false
        },
        stats: {
            headline: "Statistik",
            description: "Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum.",
            checked: false,
            disabled: false
        }
    },
    onDismiss: () => {
        alert('Dismissed');
    },
    onAccept: () => {
        alert('Accepted');
    }
}