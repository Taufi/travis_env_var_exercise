const thatRocks = process.env.THAT_ROCKS;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${thatRocks} rock!`);
    await sleep(5000);
  }
}

main();
