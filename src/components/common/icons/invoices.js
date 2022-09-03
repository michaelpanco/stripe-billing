import React from 'react';
import styles from './icon.module.css';

const InvoicesIcon = (props) => {
    const { label } = props;
    return (
        <div className={styles.icon}>
            <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.7607 2.10742C11.8877 2.10742 11.9935 2.14974 12.0781 2.23438C12.1628 2.31901 12.2051 2.4248 12.2051 2.55176V12.0732C12.2051 12.2002 12.1628 12.306 12.0781 12.3906C11.9935 12.4753 11.8877 12.5176 11.7607 12.5176H2.23926C2.1123 12.5176 2.00651 12.4753 1.92188 12.3906C1.83724 12.306 1.79492 12.2002 1.79492 12.0732V2.55176C1.79492 2.4248 1.83724 2.31901 1.92188 2.23438C2.00651 2.14974 2.1123 2.10742 2.23926 2.10742H11.7607ZM11.7607 0.8125H2.23926C1.75684 0.8125 1.34635 0.981771 1.00781 1.32031C0.669271 1.65885 0.5 2.06934 0.5 2.55176V12.0732C0.5 12.5557 0.669271 12.9661 1.00781 13.3047C1.34635 13.6432 1.75684 13.8125 2.23926 13.8125H11.7607C12.2432 13.8125 12.6536 13.6432 12.9922 13.3047C13.3307 12.9661 13.5 12.5557 13.5 12.0732V2.55176C13.5 2.06934 13.3307 1.65885 12.9922 1.32031C12.6536 0.981771 12.2432 0.8125 11.7607 0.8125ZM7.43164 4.27832H10.8975V5.1416H7.43164V4.27832ZM7.43164 6.01758H10.8975V6.88086H7.43164V6.01758ZM7.43164 7.74414H10.8975V8.60742H7.43164V7.74414ZM8.73926 9.4834H10.8975V10.3467H8.73926V9.4834ZM6.4541 7.98535C6.42025 7.90072 6.3737 7.82454 6.31445 7.75684C6.26367 7.68066 6.20866 7.61296 6.14941 7.55371H6.13672C6.06901 7.49447 5.99707 7.43945 5.9209 7.38867C5.84473 7.32943 5.76432 7.27865 5.67969 7.23633H5.66699C5.57389 7.19401 5.47656 7.15169 5.375 7.10938C5.2819 7.06706 5.18034 7.02474 5.07031 6.98242C5.0026 6.95703 4.93913 6.93164 4.87988 6.90625C4.82064 6.88086 4.76139 6.85547 4.70215 6.83008H4.72754C4.68522 6.81315 4.6429 6.79622 4.60059 6.7793C4.56673 6.75391 4.53288 6.72428 4.49902 6.69043H4.51172C4.48633 6.6735 4.46517 6.65658 4.44824 6.63965C4.43132 6.61426 4.41862 6.58887 4.41016 6.56348V6.55078C4.40169 6.52539 4.39323 6.5 4.38477 6.47461C4.3763 6.44076 4.37207 6.41113 4.37207 6.38574C4.37207 6.37728 4.37207 6.37305 4.37207 6.37305C4.37207 6.36458 4.37207 6.36035 4.37207 6.36035C4.37207 6.3265 4.3763 6.29688 4.38477 6.27148C4.39323 6.23763 4.40169 6.20378 4.41016 6.16992V6.18262C4.41862 6.14876 4.43132 6.12337 4.44824 6.10645C4.46517 6.08105 4.4821 6.05566 4.49902 6.03027C4.51595 6.01335 4.53711 5.99642 4.5625 5.97949C4.59635 5.96257 4.62598 5.94987 4.65137 5.94141C4.68522 5.92448 4.71908 5.91602 4.75293 5.91602C4.79525 5.90755 4.83757 5.90332 4.87988 5.90332C4.88835 5.90332 4.89258 5.90332 4.89258 5.90332C4.89258 5.90332 4.89681 5.90332 4.90527 5.90332C4.91374 5.90332 4.9222 5.90332 4.93066 5.90332C4.99837 5.90332 5.06185 5.92025 5.12109 5.9541C5.1888 5.97949 5.24805 6.01758 5.29883 6.06836C5.34115 6.1276 5.375 6.19954 5.40039 6.28418C5.43424 6.36035 5.45117 6.44076 5.45117 6.52539C5.45117 6.53385 5.45117 6.54232 5.45117 6.55078C5.45117 6.55924 5.44694 6.57194 5.43848 6.58887V6.57617V6.69043H6.56836V6.57617C6.56836 6.56771 6.56836 6.55924 6.56836 6.55078C6.56836 6.44922 6.5599 6.34766 6.54297 6.24609C6.52604 6.14453 6.50065 6.0472 6.4668 5.9541L6.47949 5.9668C6.44564 5.8737 6.40332 5.78906 6.35254 5.71289C6.31022 5.62826 6.25944 5.55208 6.2002 5.48438C6.14095 5.41667 6.07324 5.35319 5.99707 5.29395C5.92936 5.2347 5.85742 5.18815 5.78125 5.1543L5.76855 5.1416C5.70085 5.10775 5.62891 5.07812 5.55273 5.05273C5.47656 5.02734 5.40039 5.00618 5.32422 4.98926H5.31152V4.27832H4.5752V4.97656C4.49056 4.99349 4.40592 5.01465 4.32129 5.04004C4.24512 5.05697 4.17318 5.08236 4.10547 5.11621L4.11816 5.10352C4.03353 5.14583 3.95312 5.19238 3.87695 5.24316C3.80924 5.28548 3.74154 5.33626 3.67383 5.39551C3.61458 5.46322 3.55957 5.53092 3.50879 5.59863C3.46647 5.66634 3.42839 5.74251 3.39453 5.82715V5.83984C3.36068 5.91602 3.33105 6.00488 3.30566 6.10645C3.28874 6.19954 3.28027 6.29688 3.28027 6.39844C3.28027 6.5 3.28874 6.59733 3.30566 6.69043C3.33105 6.78353 3.36068 6.87663 3.39453 6.96973V6.95703C3.42839 7.04167 3.4707 7.12207 3.52148 7.19824C3.58073 7.26595 3.63997 7.32943 3.69922 7.38867H3.71191C3.77962 7.44792 3.85156 7.50293 3.92773 7.55371C4.00391 7.60449 4.08431 7.65104 4.16895 7.69336L4.18164 7.70605C4.25781 7.73991 4.34245 7.77799 4.43555 7.82031C4.53711 7.86263 4.63867 7.90072 4.74023 7.93457L4.77832 7.94727C4.84603 7.97266 4.90951 7.99805 4.96875 8.02344C5.02799 8.04036 5.08301 8.06152 5.13379 8.08691H5.12109C5.15495 8.10384 5.1888 8.125 5.22266 8.15039C5.25651 8.17578 5.29036 8.20117 5.32422 8.22656C5.34115 8.24349 5.35807 8.26465 5.375 8.29004C5.39193 8.31543 5.40885 8.34505 5.42578 8.37891C5.43424 8.4043 5.43848 8.43392 5.43848 8.46777C5.44694 8.50163 5.45117 8.53548 5.45117 8.56934C5.45117 8.56934 5.45117 8.57357 5.45117 8.58203V8.56934C5.45117 8.5778 5.45117 8.58203 5.45117 8.58203C5.45117 8.64974 5.43848 8.71322 5.41309 8.77246C5.3877 8.82324 5.35384 8.86979 5.31152 8.91211C5.26074 8.95443 5.2015 8.98828 5.13379 9.01367C5.06608 9.0306 4.99414 9.03906 4.91797 9.03906C4.90951 9.03906 4.90104 9.03906 4.89258 9.03906C4.88411 9.03906 4.87565 9.03906 4.86719 9.03906C4.82487 9.03906 4.78255 9.03483 4.74023 9.02637C4.69792 9.0179 4.6556 9.00944 4.61328 9.00098C4.57943 8.99251 4.54557 8.97982 4.51172 8.96289C4.47786 8.9375 4.44401 8.91634 4.41016 8.89941C4.3763 8.86556 4.34668 8.83171 4.32129 8.79785C4.30436 8.764 4.28743 8.72591 4.27051 8.68359C4.25358 8.63281 4.23665 8.58203 4.21973 8.53125C4.21126 8.47201 4.20703 8.41699 4.20703 8.36621C4.20703 8.35775 4.20703 8.35352 4.20703 8.35352C4.20703 8.34505 4.20703 8.33659 4.20703 8.32812V8.34082V8.22656H3.10254V8.34082C3.10254 8.34082 3.10254 8.34505 3.10254 8.35352C3.10254 8.36198 3.10254 8.37044 3.10254 8.37891C3.10254 8.4974 3.111 8.61589 3.12793 8.73438C3.15332 8.8444 3.18717 8.9502 3.22949 9.05176C3.27181 9.14486 3.31836 9.23372 3.36914 9.31836C3.42839 9.39453 3.49609 9.46647 3.57227 9.53418C3.63997 9.60189 3.71191 9.66113 3.78809 9.71191C3.87272 9.75423 3.96159 9.79232 4.05469 9.82617V9.83887C4.1224 9.86426 4.19434 9.88542 4.27051 9.90234C4.34668 9.91927 4.42285 9.9362 4.49902 9.95312H4.51172V10.6006H5.24805V9.95312C5.33268 9.9362 5.41309 9.91927 5.48926 9.90234C5.57389 9.87695 5.6543 9.85156 5.73047 9.82617H5.71777C5.81087 9.79232 5.89128 9.75423 5.95898 9.71191C6.03516 9.66113 6.1071 9.60612 6.1748 9.54688C6.23405 9.48763 6.28906 9.42415 6.33984 9.35645C6.39062 9.28027 6.43294 9.19987 6.4668 9.11523V9.10254C6.50065 9.02637 6.52604 8.94596 6.54297 8.86133C6.5599 8.76823 6.56836 8.67513 6.56836 8.58203C6.56836 8.57357 6.56836 8.56934 6.56836 8.56934C6.56836 8.56087 6.56836 8.55664 6.56836 8.55664C6.56836 8.54818 6.56836 8.54395 6.56836 8.54395C6.56836 8.44238 6.55566 8.34505 6.53027 8.25195C6.51335 8.15885 6.48796 8.06999 6.4541 7.98535Z"
                    fill="#707070"
                />
            </svg>

            <span className={styles.icon__label}>{label}</span>
        </div>
    );
};

export { InvoicesIcon };