import SearchIcon from '@rsuite/icons/Search';
import { Input, InputGroup } from 'rsuite'

const SearchInputMonster = () => {
    return (
        <>
            <InputGroup>
                <Input placeholder='Enter name pokemon' />
                <InputGroup.Addon>
                    <SearchIcon />
                </InputGroup.Addon>
            </InputGroup>
        </>
    )
}

export default SearchInputMonster