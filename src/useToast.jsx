import Notify from 'simple-notify';
import 'simple-notify/dist/simple-notify.min.css';

export const useToast = () => {
  const showToast = ({message, status}) => {
    console.log(status);
    new Notify({
        status:status,
        title: status,
        text: message,
        effect: 'slide',
        speed: 300,
        customClass: '',
        customIcon: '',
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 1000,
        notificationsGap: null,
        notificationsPadding: null,
        position: 'right top',
        
      })
  };

  return showToast;
};
