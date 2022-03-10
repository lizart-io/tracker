import ReactHtmlParser from "react-html-parser";
import React from "react";
let today = new Date().toLocaleDateString("en-US");

export const RenderInvoice = ({ invoice }) => {
  return <div>{ReactHtmlParser(invoice)} </div>;
};

const footer = () => `
  <div style="padding: 50px;">
    <table border="0" cellpadding="0" cellspacing="0" width="500">
    <tbody>
      <tr>
        <td height="64" style="font-family:Helvetica, Arial, sans-serif; font-size:18px; font-style:bold;">
          <strong>Erick Linares </strong>- 
          <em style="font-size:17px; font-weight:400;">Owner</em>
          <hr />
          <span>Erick's Home Improvement, LLC.</span><br>
            <a href='tel:240-645-6460' style="color:black;">240-645-6460</a><br>
            <a href="mailto:invoice.thanks@outlook.com"  style="color:black;">Invoice.Thanks@outlook.com</a>
        </td>
      </tr>
     <hr />
      <tr>
        <td height="70">
          <small style="font-family:Helvetica, Arial, sans-serif; font-size:10px; color:#4d4d4e;">Confidentiality Notice: This e-mail message, including any attachments, is for the sole use of the intended recipient(s) and may contain confidential and privileged information. Any unauthorized review, use, disclosure or distribution of this information is prohibited, and may be punishable by law. If this was sent to you in error, please notify the sender by reply e-mail and destroy all copies of the original message. Please consider the environment before printing this e-mail.</small>
        </td>
      </tr>
    </tbody>
  </table></div>`;
export const invoice = (client, items, cost, method, status) => {
  const oneItem = (name, quantity, index) => {
    if (Number(items.length - 1) === Number(index)) {
      return `<tr class="item">
					<td style="padding: 5px;vertical-align: top;border-bottom: 1px solid #eee;">${name}</td>

					<td style="padding: 5px;vertical-align: top;text-align: right;border-bottom: 1px solid #eee;">${quantity}</td>
				</tr>
                <hr />
                `;
    } else {
      return `
				<tr class="item last">
					<td style="padding: 5px;vertical-align: top;border-bottom: none;">${name}</td>

					<td style="padding: 5px;vertical-align: top;text-align: right;border-bottom: none;">${quantity}</td>
				</tr>`;
    }
  };
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
                                Invoice ID: ${`${client._id}`.substring(
                                  4,
                                  10
                                )}<br>                             
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

					<td style="padding: 5px;vertical-align: top;text-align: right;background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;">Status</td>
				</tr>

				<tr class="details">
					<td style="padding: 5px;vertical-align: top;padding-bottom: 20px;">${method}</td>

					<td style="padding: 5px;vertical-align: top;text-align: right;padding-bottom: 20px;"><span style="color:${
            status === "Paid" ? "green" : "red"
          };">${status}</span><br></td>
				</tr>

				<tr class="heading">
					<td style="padding: 5px;vertical-align: top;background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;">Item</td>

					<td style="padding: 5px;vertical-align: top;text-align: right;background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;">Price</td>
				</tr>

                
${items.map(({ name, quantity }, index) => oneItem(name, quantity)).join("")}
	
				

				<tr class="total">
					<td style="padding: 5px;vertical-align: top;"></td>

					<td style="padding: 5px;vertical-align: top;text-align: right;border-top: 2px solid #eee;font-weight: bold;">Total: $${cost}</td>
				</tr>
			</table>
		</div>
        <br>
        <br>
        <br>
        <br>
        ${footer()}
	</body>`;
};
