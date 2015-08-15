/**
 * Created by andliu2 on 8/15/15.
 */



require('shelljs/global');

if (which('git')) {
    exec('git push --mirror '+'https://'+process.env.BAE_USERNAME+':'+process.env.BAE_PASSWORD+'@'+process.env.BAE_GIT);
    //exec('git push --mirror https://git.duapp.com/appid2cmx907f4s');
}