const Module = (function () {
  const _privateMethod = function () {
    console.log('I am private');
  };
  const publicMethod = function () {
    console.log('Calling _privateMethod() inside publicMethod():');
    _privateMethod();
    console.log('I am public function');
    console.log('---------------------------');
  };
  const anotherPublicMethod = function () {
    console.log('I am anonther public function');
    console.log('---------------------------');
  };

  return {
    renamedPublicMethod: publicMethod,
    anotherPublicMethod,
  };
})();

Module.renamedPublicMethod();
Module.anotherPublicMethod();
