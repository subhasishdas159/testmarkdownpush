import simpleGit from 'simple-git';
const git = simpleGit();

var commitMsgArgs = process.argv.slice(2);

// after it has been init this runs
const afterInit = async () => {
  const status = await git.status();
  console.log('status', status);
  // Only run this when there is actually some changes
  if (!status.isClean()) {
    await git
      .add('./*')
      .commit(commitMsgArgs, () =>
        console.log('after committing this has ben invoked'),
      );
  }
  console.log('here');
};

// await git.addRemote(
//   'origin',
//   'git@github.com:subhasishdas159/testmarkdownpush.git',
// );

const remotes = git.listRemote()
console.log('remotes', remotes)

try {
  await afterInit();
} catch (error) {
  console.log('error', error);
  await git.init();
  await afterInit();
}
