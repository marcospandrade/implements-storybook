import React from 'react';

import './styles.scss';

type Props = {
    classe: string;
};

export function ButtonAgil({ classe }: Props) {
    return <button className={classe}>Teste</button>;
}
