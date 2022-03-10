import ReactHtmlParser from "react-html-parser";
import React from "react";
let today = new Date().toLocaleDateString("en-US");

export const RenderInvoice = ({ invoice }) => {
  return <div>{ReactHtmlParser(invoice)} </div>;
};
export const invoice = (client, items, cost, status = "Ready For Pay") => {
  return `
	<body>
		<div class="invoice-box" style="max-width: 800px;margin: auto;padding: 30px;border: 1px solid #eee;box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);font-size: 16px;line-height: 24px;font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color: #555;">
			<table cellpadding="0" cellspacing="0" style="width: 100%;line-height: inherit;text-align: left;">
				<tr class="top">
					<td colspan="2" style="padding: 5px;vertical-align: top;">
						<table style="width: 100%;line-height: inherit;text-align: left;">
							<tr>
								<td class="title" style="padding: 5px;vertical-align: top;padding-bottom: 20px;font-size: 45px;line-height: 45px;color: #333;">
									<img src="https://i.imgur.com/MY3RGk8.png" style="width: 100%; max-width: 300px">
								</td>

								<td style="padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;">
									Created: ${today}<br>
                                    Status: <span style="color:green;">${status}</span><br>
                             	</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr class="information">
					<td colspan="2" style="padding: 5px;vertical-align: top;">
						<table style="width: 100%;line-height: inherit;text-align: left;">
							<tr>
								<td style="padding: 5px;vertical-align: top;padding-bottom: 40px;">
									<strong>Erick's Home Improvement, LLC.</strong><br>
									<a href='tel:240-645-6460'>240-645-6460</a><br>
                                    <a href="mailto:invoice.thanks@outlook.com">Invoice.Thanks@outlook.com</a>
								</td>

								<td style="padding: 5px;vertical-align: top;text-align: right;padding-bottom: 40px;">
									<strong>${client.firstName}&nbsp;${client.lastName}</strong><br>
									${client.email}
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr class="heading">
					<td style="padding: 5px;vertical-align: top;background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;">Payment Method</td>

					<td style="padding: 5px;vertical-align: top;text-align: right;background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;">Check #</td>
				</tr>

				<tr class="details">
					<td style="padding: 5px;vertical-align: top;padding-bottom: 20px;">Check</td>

					<td style="padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;">1000</td>
				</tr>

				<tr class="heading">
					<td style="padding: 5px;vertical-align: top;background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;">Item</td>

					<td style="padding: 5px;vertical-align: top;text-align: right;background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;">Price</td>
				</tr>

				<tr class="item">
					<td style="padding: 5px;vertical-align: top;border-bottom: 1px solid #eee;">Website design</td>

					<td style="padding: 5px;vertical-align: top;text-align: right;border-bottom: 1px solid #eee;">$300.00</td>
				</tr>

				<tr class="item">
					<td style="padding: 5px;vertical-align: top;border-bottom: 1px solid #eee;">Hosting (3 months)</td>

					<td style="padding: 5px;vertical-align: top;text-align: right;border-bottom: 1px solid #eee;">$75.00</td>
				</tr>

				<tr class="item last">
					<td style="padding: 5px;vertical-align: top;border-bottom: none;">Domain name (1 year)</td>

					<td style="padding: 5px;vertical-align: top;text-align: right;border-bottom: none;">$10.00</td>
				</tr>

				<tr class="total">
					<td style="padding: 5px;vertical-align: top;"></td>

					<td style="padding: 5px;vertical-align: top;text-align: right;border-top: 2px solid #eee;font-weight: bold;">Total: $${cost}</td>
				</tr>
			</table>
		</div>
	</body>`;
};
