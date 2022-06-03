import simpleGit from 'simple-git';
const git = simpleGit();
// dfnkg

// after it has been init this runs
const afterInit = async () => {
  const status = await git.status();
  // Only run this when there is actually some changes
  if (!status.isClean()) {
    await git.add('./*').commit(process.argv, () =>
      console.log('after committing this has ben invoked'),
    );
  }
  console.log('here');
};

try {
  await afterInit();
} catch (error) {
  console.log('error', error);
  await git.init();
  await afterInit();
}
