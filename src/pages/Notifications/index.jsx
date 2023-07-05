import React from 'react';
import { toast } from 'react-toastify';
import { Container, Buttons } from '../../styles-notifications';

export const Notifications = () => {

        const handleDefault = () => {
            toast('Mensagem default');
        }
     
        const handleError = () => {
            toast.error('Mensagem error');
        }
       
        const handleSuccess = () => {
            toast.success('Mensagem success');
        }
       
        const handleInfo = () => {
            toast.info('Mensagem info');
        }
      
        const handleWarn = () => {
            toast.warn('Mensagem warn');
        }
       
        const handleCustom = () => {
            toast('Mensagem customizada', {
            position: toast.POSITION.TOP_LEFT,
            className: 'sua-classe',
        });
    }

}