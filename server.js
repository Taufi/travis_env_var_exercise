const thatRocks = process.env.T_REX;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${thatRocks} rocks!`);
    // console.log("FC rocks!");
    await sleep(5000);
  }
}

main();
