import React, { Suspense } from 'react';
import ResetPasswordForm from './reset-password-form';

const ResetPasswordPage = () => {
    return (
        <div>
            <h2>Reset Password</h2>
            <Suspense fallback='Loading'></Suspense>
            <ResetPasswordForm></ResetPasswordForm>
        </div>
    );
};

export default ResetPasswordPage;