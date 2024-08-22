import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const Policy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>1. Shipping Policy</h3>
        <p>
          <strong>Order Processing:</strong> All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped. Orders placed after 5 PM EST will be processed the next business day.
        </p>
        <p>
          <strong>Shipping Rates and Estimates:</strong> Shipping charges for your order will be calculated and displayed at checkout. We offer the following shipping options:
          <ul>
            <li>Standard Shipping: 3-7 business days</li>
            <li>Expedited Shipping: 2-3 business days</li>
            <li>Overnight Shipping: 1-2 business days</li>
          </ul>
        </p>
        <p>
          <strong>Shipping to P.O. Boxes:</strong> Please note that we do not ship to P.O. Boxes or APO/FPO addresses.
        </p>
        <p>
          <strong>International Shipping:</strong> At this time, we only ship within the United States.
        </p>
        <p>
          <strong>Order Tracking:</strong> Once your order has shipped, you will receive a shipping confirmation email with a tracking number. You can track the status of your shipment using the tracking number provided.
        </p>
      </div>

      <div className={styles.section}>
        <h3>2. Return Policy</h3>
        <p>
          <strong>Returns:</strong> We accept returns within 30 days of delivery for a full refund. Items must be in new, unused condition with all original tags and packaging. To initiate a return, please contact our customer service team at support@aulti.store with your order number and the reason for the return. We will provide you with a return authorization and instructions on how to send your item back to us.
        </p>
        <p>
          <strong>Return Shipping:</strong> Customers are responsible for return shipping costs. We recommend using a trackable shipping service or purchasing shipping insurance. We cannot guarantee that we will receive your returned item.
        </p>
        <p>
          <strong>Refunds:</strong> Once we receive your return and inspect the item, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will be applied to your original method of payment within 5-7 business days.
        </p>
        <p>
          <strong>Exchanges:</strong> If you need to exchange an item for a different size or color, please contact us at support@aulti.store to arrange the exchange. Exchanges are subject to product availability.
        </p>
        <p>
          <strong>Damaged or Defective Items:</strong> If you received a damaged or defective item, please contact us immediately at support@aulti.store with your order number and a photo of the item’s condition. We will work to resolve the issue promptly.
        </p>
      </div>

      <div className={styles.section}>
        <h3>3. Contact Us</h3>
        <p>
          If you have any questions or concerns about our Shipping and Return Policy, please contact us at:
        </p>
        <p>
          <strong>Aulti</strong><br />
          Email: support@aulti.store
        </p>
        <p>
          <strong>Legal Business Name:</strong><br />
          Fix Figures
        </p>
      </div>
    </div>
  );
};

export default Policy;
