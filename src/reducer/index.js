import { userReducer } from './userReducer';
import { patientReducer } from './patientReducer';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { doctorReducer } from './doctorReducer';
import { staffReducer } from './staffReducer';
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user','patient','doctor','staff']
};

const rootReducer = combineReducers({
	user: userReducer,
	patient: patientReducer,
   doctor: doctorReducer,
	staff: staffReducer
});

export default persistReducer(persistConfig, rootReducer);
