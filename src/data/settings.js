export default {
    cookieName: "ncc",
    body: {
        headline: 'Datenschutzeinstellungen',
        intro: 'Willkommen auf unserer Website! Um Ihnen das beste Online-Erlebnis zu bieten, verwenden wir Cookies und ähnliche Technologien. Mit dem Klick auf "Akzeptieren" stimmen Sie der Verwendung von Cookies zu. Alternativ können Sie die Nutzung einzelner Cookies steuern.',
    },
    buttons: {
        btnAcceptLabel: 'Alle akzeptieren',
        btnConfigLabel: 'Einstellungen',
        btnSaveLabel: 'Auswahl speichern'
    },
    categories: {
        essential: {
            headline: 'Funktional',
            description: 'Funktionale Cookies sind wichtig, um sicherzustellen, dass die Website ordnungsgemäß funktioniert und die von Ihnen bevorzugten Einstellungen berücksichtigt werden.',
            checked: true,
            disabled: true
        },
        stats: {
            headline: 'Statistik',
            description: 'Statistik Cookies sammeln anonyme Daten darüber, wie Besucher unsere Webseite nutzen, um sie zu verbessern. Sie werden ausschließlich für analytische Zwecke verwendet.',
            checked: false,
            disabled: false
        },
        marketing: {
            headline: 'Marketing',
            description: 'Marketing Cookies werden verwendet, um personalisierte Werbung basierend auf Ihren Interessen anzuzeigen.',
            checked: false,
            disabled: false
        },
    },
    onDismiss: () => {
        alert('Dismissed');
    },
    onAccept: () => {
        alert('Accepted');
    }
}