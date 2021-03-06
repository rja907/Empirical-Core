require 'rails_helper'

describe 'SalesContactUpdater' do
  before { Timecop.freeze }
  after { Timecop.return }

  it 'updates the sales stage for a user' do
    user = create(:user, role: 'teacher')

    SalesContactUpdater.new(user.id, '1').update

    stage = SalesStage.joins(:sales_stage_type)
      .where('sales_stage_types.name = ?', 'Basic Subscription')
      .first

    expect(stage).to have_attributes(completed_at: Time.now)
  end

  it 'adds a reference to the current user to the updated sales stage' do
    staff = create(:user, role: 'staff')
    user = create(:user, role: 'teacher')

    SalesContactUpdater.new(user.id, '1', staff).update

    stage = SalesStage.joins(:sales_stage_type)
      .where('sales_stage_types.name = ?', 'Basic Subscription')
      .first

    expect(stage).to have_attributes(user: staff)
  end

  it 'informs external CMS of an update' do
    user           = create(:user, role: 'teacher')
    notifier       = double('cms_notifier')

    expect(notifier).to receive(:perform_async).with(user.id, 'basic_subscription')

    SalesContactUpdater.new(user.id, '1', nil, notifier).update
  end
end
