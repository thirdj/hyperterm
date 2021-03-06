// simple redux middleware that executes
// the `effect` field if provided in an action
// since this is preceded by the `plugins`
// middleware, it allows authors to interrumpt,
// defer or add to existing side effects at will
// as the result of an action being triggered

export default (store) => (next) => (action) => {
  const ret = next(action);
  if (action.effect) {
    action.effect();
    delete action.effect;
  }
  return ret;
};
