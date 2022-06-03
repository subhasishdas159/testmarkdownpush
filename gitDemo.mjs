import simpleGit from 'simple-git';
const git = simpleGit();

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
  await git.init();
  await afterInit();
} catch (error) {
  console.log('error', error);
}
