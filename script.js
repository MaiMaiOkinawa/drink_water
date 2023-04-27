const remained = document.getElementById('remained')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const smallCups = document.querySelectorAll('.cup-small')

updateBigCup()

// Set a func for small cups
smallCups.forEach((cup, idx) => {
  //Func when you click, it turns colors the background of small cups
  cup.addEventListener('click', () => highlightCups(idx))
})

// Ad you click, and the clicked cup as well as the cups before the clicked ones are also filled with color 
function highlightCups(idx) {
  // Toggling the last fulled small cup
  // First: The one that we're clicking on is full?
  // Second: The cup next to the clicked one is NOT full?
  // If so, decrement the index by one
  if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--
  }

  smallCups.forEach((cup, idx2) => {
    // If the current index(idx2) is less than or eaqule to the clicked index(idx), add 'full' class
    if (idx2 <= idx) {
      cup.classList.add('full')
    // Otherwise remove the class
    } else {
      cup.classList.remove('full')
    }
  })
  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length // 8

 
  if (fullCups === 0) {
    //Hide the percentage if it's empty
    percentage.style.visibility = 'hidden'
    percentage.style.height = '0'

    // If there's some water, then display the %
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 330}px`
    // Display the text
    percentage.innerText= `${fullCups / totalCups * 100}%`
  }
  // Removing the text 'Remained' and color the cup all the way up when the cup is full
  if (fullCups === totalCups) {
    // Removing the text "Remained"
    remained.style.visibility = 'hidden'
    // Color the cup
    remained.style.height = 0
  } else {
    // // Put the text 'Remained' when it's not full
    remained.style.visibility = 'visible'
    // // Add the text 'L'
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}