import moment from 'moment';
import { isNil } from 'lodash/fp';

class AuthInfo {
  static propTypes = {
    accessToken: String,
    issuedDate: String,
    expiresIn: Number,
    appState: String,
  };

  constructor(authInfo) {
    if (!isNil(authInfo)) {
      const { accessToken, issuedDate, appState, expiresIn } = authInfo;
      this.accessToken = accessToken;
      this.issuedDate = issuedDate;
      this.appState = appState;
      this.expiresIn = expiresIn;
    }
  }

  /**
   * check if user is valid
   */
  isValid = () => {
    const { expiresIn, issuedDate } = this;
    const expiredDate = moment(issuedDate).add(expiresIn, 'seconds');
    return expiredDate >= moment();
  };

  remainTime = () => {
    const { expiresIn, issuedDate } = this;
    return moment(issuedDate)
      .add(expiresIn, 'seconds')
      .diff(moment(), 'seconds');
  };
}

export default AuthInfo;
