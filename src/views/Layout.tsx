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
            <div>
                <Header />
                <div style={{ height: "calc(100vh - 346px)" }}>{children}</div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
