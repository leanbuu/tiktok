
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,  faSpinner, } from '@fortawesome/free-solid-svg-icons';
import HeadLessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '../Layout/components/AccountsItem'
import 'tippy.js/dist/tippy.css';
import { useEffect, useState, useRef} from 'react';
import { SearchIcon } from '../Layout/components/Icons';

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,1,1]);
        }, 0);
    }, []);


    const handleClear = () => {
        setSearchValue('');
        setSearchResult(['']);
        inputRef.current.focus();
    }

    const handleHideResult = () =>{
        setShowResult(false)
    }


    return ( 
        <HeadLessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <h4 className={cx('search-title')}>Accounts</h4>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                </PopperWrapper>
            </div>
        )}
        onClickOutside={handleHideResult}
    >
        <div className={cx('search')}>
            <input 
                ref={inputRef}
                value={searchValue}
                placeholder="Search accounts and videos" 
                spellCheck={false} 
                onChange={e => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}/>
            { !! searchValue &&  (
                  <button className={cx('clear')} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
              </button>

            )}
          
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

            <button className={cx('search-btn')}>
                <SearchIcon></SearchIcon>
            </button>
        </div>
</HeadLessTippy>
     );
}

export default Search;