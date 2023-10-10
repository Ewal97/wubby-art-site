import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CommissionCard = (props) => {
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.commission.image}
                alt={props.commission.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.commission.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
};

export default CommissionCard;