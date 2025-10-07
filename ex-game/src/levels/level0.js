export const level0 = {

    html: `
    <h3>Level 0</h3> 
    <p>do things to get to level 1</p>

    <button id="winner">the right one</button>
    <button id="loser">the wrong one</button>
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
        
        const lose = document.getElementById('loser')
        lose.addEventListener('click', () => {
            if (true) {
                
                alert('loser!')
                
                if (ctx && typeof ctx.setLevel === 'function' && typeof ctx.currentLevel === 'number') {
 
                    ctx.setLevel(ctx.currentLevel - ctx.currentLevel)
 
                }
            }
        })


        }
}