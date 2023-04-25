import React, { useCallback } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

interface Props {
    children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <div >
                <Header />
                <div className=''>{children}</div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
