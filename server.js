const T_REX = process.env.THAT_ROCKS;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${T_REX} rockt richtig!`);
    // console.log("FC rocks!");
    await sleep(5000);
  }
}

main();
