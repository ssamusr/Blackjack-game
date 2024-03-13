function generateDeck () {
    const deck = []
    const suits = ['Hearts', 'Clubs', 'Diamond', 'Spades']
    const cards = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'Jack',
        'Queen',
        'King',
        'Ace'
    ]
    
    // {card: 'King', suit: 'Hearts'}
    
    for ( const card of cards ) {
        for ( const suit of suits ) {
            deck.push({card: card, suit: suit})
        }
    }

    return deck
}

const deck = generateDeck()