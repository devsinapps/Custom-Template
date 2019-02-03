import React from 'react'
import Griddle, { plugins } from 'griddle-react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
class GriddleTable extends React.Component{
	render(){
		var data = [
		  {
		    "id": 0,
		    "name": "Mayer Leonard",
		    "city": "Kapowsin",
		    "state": "Hawaii",
		    "country": "United Kingdom",
		    "company": "Ovolo",
		    "favoriteNumber": 7
		  },
		  {
		    "id": 1,
		    "name": "John Doe",
		    "city": "Kapowsin",
		    "state": "Hawaii",
		    "country": "United Kingdom",
		    "company": "Ovolo",
		    "favoriteNumber": 7
		  },
		   {
		    "id": 2,
		    "name": "Jane Doe",
		    "city": "Kapowsin",
		    "state": "Hawaii",
		    "country": "United Kingdom",
		    "company": "Ovolo",
		    "favoriteNumber": 7
		  }
		];

		const griddleLayout = ({Table, Pagination, Filter, SettingsWrapper}) => (
		    <div>
		    	<Filter />
		    	<Table hover
		    	/>
		        <Pagination/>
		        
		    </div>
		);
		return(
			<div className='GriddleTable'>
				<Container fluid>
					<Row>
						<Col lg='12'>
							<Card>
								<CardBody>
									<Griddle		   
									   data={data}
									   plugins={[plugins.LocalPlugin]}
									   components={{
									        Layout: griddleLayout
									    }}
									    styleConfig={{
									    	classNames:{
									    		Table: 'table table-hover table-bordered table-responsive table-sm table-striped'
									    	}
									    }}
									/>	
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default GriddleTable