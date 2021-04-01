console.clear();

//ACTION CREATEORS
const createPolicy = (name, amount) => {
  return {
    //ACTIONS
    type: "CREATE_POLICY",
    payloads: {
      name: name,
      amount: amount,
    },
  };
};

const removePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payloads: {
      name: name,
    },
  };
};

const createClaim = (name, amount) => {
  return {
    type: "CREATE_CLAIM",
    payloads: {
      name: name,
      amount: amount,
    },
  };
};

//REDUCERS
const claimHistory = (claimHistory = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...claimHistory, action.payloads.name];
  }
  return claimHistory;
};

const Accounting = (companyMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return companyMoney - action.payloads.amount;
  } else if (action.type === "CREATE_POLICY") {
    return companyMoney + action.payloads.amount;
  }
  return companyMoney;
};

const Policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payloads.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((policy) => policy !== action.payloads.name);
  }
  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  claimHistory: claimHistory,
  Accounting: Accounting,
  Policies: Policies,
});

const store = createStore(ourDepartments);
store.dispatch(createPolicy("Robin", 1000));
store.dispatch(createPolicy("John", 200));
store.dispatch(createPolicy("Ram", 500));
store.dispatch(createPolicy("Jean", 200));

store.dispatch(createClaim("Robin", 1500));
store.dispatch(createClaim("Jean", 200));

console.log(store.getState());
