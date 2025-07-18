import { t } from '@grafana/i18n';

import { withPageErrorBoundary } from '../../withPageErrorBoundary';
import { AlertingPageWrapper } from '../AlertingPageWrapper';
import { ModifyExportRuleForm } from '../rule-editor/alert-rule-form/ModifyExportRuleForm';

function ExportNewGrafanaRulePage() {
  return (
    <AlertingPageWrapper
      navId="alert-list"
      pageNav={{
        text: t('alerting.export-new-grafana-rule-page.text.export-new-grafana-rule', 'Export new Grafana rule'),
        subTitle: 'Export a new rule definition in Terraform(HCL) format. Any changes you make will not be saved.',
      }}
    >
      <ModifyExportRuleForm />
    </AlertingPageWrapper>
  );
}

export default withPageErrorBoundary(ExportNewGrafanaRulePage);
