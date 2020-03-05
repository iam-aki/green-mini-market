import * as React from 'react';
import { Typography } from '@material-ui/core';
import RupeeIcon from './RupeeIcon';
import StyledButton from './StyledButton';

interface IProps {
    count: number;
    mrp?: number;
    helptext?: boolean;
    add: () => any;
    delete: () => any;
}

export default function CartButton(props: IProps) {
    const { count, mrp, helptext = false } = props;
    return (
        <>
            {count > 0 ?
                <StyledButton onClick={() => props.delete()}>
                    <Typography variant="caption" display="block">
                        - Remove
                     </Typography>
                </StyledButton> :
                <StyledButton onClick={() => props.add()}>
                    <Typography variant="caption" display="block">
                        {mrp ?
                            <>{"ADD TO CART *"}<RupeeIcon />{mrp}</>
                            : "+ Add to Cart"}
                    </Typography>
                </StyledButton>
            }
            {helptext ?
                <Typography variant="caption" display="block">
                    (Including GST and shipping cost)
                </Typography>
                : <> </>
            }
        </>
    );
}