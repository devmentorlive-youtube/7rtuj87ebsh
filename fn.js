async function expensive() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 5000);
  });
}

async function memoize(fn) {
  let memo;
  return async () => {
    if (!memo) memo = await fn();
    return memo;
  };
}

const g = await memoize(expensive);
await g();

list = [...new Array(5000)].map((_, i) => i);

function fn(list) {
  const [head, tail] = [list[0], list.slice(1)];
  console.dir(head);
  return tail.length ? fn(tail) : undefined;
}

fn(list);
