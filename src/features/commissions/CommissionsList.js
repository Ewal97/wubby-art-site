import { COMMISSIONS } from "../../app/shared/COMMISSIONS";
import { Col, Row } from 'reactstrap';
import CommissionCard from "./CommissionCard";

const CommissionsList = () => {
    return (
        <Row className="ms-auto">
            {COMMISSIONS.map((commission) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={commission.id}
                    >
                        <CommissionCard commission={commission} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CommissionsList;