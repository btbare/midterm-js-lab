export const level2 = {

    html:`
    <h3>Level 2</h3>
    
    <button id="winner">the right one?</button>
    <button class="loser">the right one?</button>
    <button class="loser">the right one?</button>
    <button class="loser">the right one?</button>
    <button class="loser">the right one?</button>
    <button class="loser">the right one?</button>
    `,

    script: (ctx) => {
        console.log('level 0 loaded')
        const win = document.getElementById('winner')

        win.addEventListener('click', () => {
            if (true) {
                alert('winner!')

                if (ctx && typeof ctx.setLevel === 'function' && typeof ctx.currentLevel === 'number') {
                    ctx.setLevel(ctx.currentLevel + 1)
                }
            }
        })

        const lose = document.querySelectorAll('.loser')
        lose.forEach(button => {
            button.addEventListener('click', () => {
                if (true) {
                    alert('loser!')

                    if (ctx && typeof ctx.setLevel === 'function' && typeof ctx.currentLevel === 'number') {
                        ctx.setLevel(ctx.currentLevel - ctx.currentLevel)
                    }
                }
            })
        })
    }
}
