import simpleGit from 'simple-git';
const git = simpleGit();

// after it has been init this runs
const afterInit = async () => {
  const status = await git.status();
  console.log('status', status);
  if (!status.isClean()) {
    await git.add('./*').commit('initial commit', () =>
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
