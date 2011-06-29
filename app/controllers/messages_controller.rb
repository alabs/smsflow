class MessagesController < ApplicationController

  before_filter :authenticate_user!

  def index
    @messages = current_user.messages.desc(:created_at)
    @message = Message.new
  end

  def create
    @message = Message.new(params[:message])
    if @message.save
      redirect_to(@message, :notice => 'Message was successfully created.')
    else
      render :action => 'new'
    end
  end
end
